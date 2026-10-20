#!/usr/bin/env node
/**
 * Check that the committed EPUBs match the current sources.
 *
 * The archives are compared by their entries and uncompressed contents rather
 * than by their bytes, because different `zip` builds may compress the same
 * files differently. This still catches a source edit that was not followed by
 * a rebuild, and it verifies the OCF requirements (mimetype first and stored).
 *
 * Usage:
 *   node tools/check-epubs.mjs
 *
 * @license [W3C Software and Document License](https://www.w3.org/Consortium/Legal/copyright-software)
 */

import { existsSync, mkdtempSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { buildEpub, listTests, checkZip } from './make-epubs.mjs'

/** Repository root, derived from this file's location. */
const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * Run a command and return its result.
 *
 * @param {string} command Executable to run.
 * @param {string[]} args Command line arguments.
 * @param {'utf8'|'buffer'} encoding Output encoding.
 * @returns {import('node:child_process').SpawnSyncReturns<string|Buffer>} Command result.
 */
function run (command, args, encoding) {
	const result = spawnSync(command, args, { encoding, maxBuffer: 10 * 1024 * 1024 })
	if (result.error) throw result.error
	return result
	}

/**
 * List archive entry names in central-directory order.
 *
 * @param {string} file EPUB path.
 * @returns {string[]} Entry names.
 */
function entries (file) {
	const result = run('unzip', ['-Z1', file], 'utf8')
	if (result.status !== 0) throw new Error(`unzip failed for ${file}: ${result.stderr}`)
	return result.stdout.trim().split('\n').filter(Boolean)
	}

/**
 * Read one entry's uncompressed contents.
 *
 * @param {string} file EPUB path.
 * @param {string} entry Entry name.
 * @returns {Buffer} Uncompressed contents.
 */
function contents (file, entry) {
	const result = run('unzip', ['-p', file, entry], 'buffer')
	if (result.status !== 0) throw new Error(`unzip failed for ${file}:${entry}: ${result.stderr}`)
	return result.stdout
	}

/**
 * Check that an entry is stored rather than deflated.
 *
 * @param {string} file EPUB path.
 * @param {string} entry Entry name.
 * @returns {boolean} True if `unzip -v` reports the entry as stored.
 */
function isStored (file, entry) {
	const result = run('unzip', ['-v', file], 'utf8')
	if (result.status !== 0) throw new Error(`unzip failed for ${file}: ${result.stderr}`)
	const line = result.stdout.split('\n').find((candidate) => candidate.trimEnd().endsWith(entry))
	return Boolean(line && line.includes('Stored'))
	}

/**
 * Compare one built book with its committed counterpart.
 *
 * @param {string} name Test identifier.
 * @param {string} built Path to the freshly built book.
 * @param {string} committed Path to the committed book.
 * @returns {string[]} Problems found.
 */
export function compareEpub (name, built, committed) {
	const problems = []
	if (! existsSync(committed)) return [`${name}: missing ${committed}; run node tools/make-epubs.mjs`]

	const builtEntries = entries(built)
	const committedEntries = entries(committed)
	if (builtEntries[0] !== 'mimetype') problems.push(`${name}: mimetype is not the first entry`)
	if (committedEntries[0] !== 'mimetype') problems.push(`${name}: committed book does not start with mimetype`)
	if (! isStored(committed, 'mimetype')) problems.push(`${name}: mimetype is not stored uncompressed`)
	if (builtEntries.join('\n') !== committedEntries.join('\n')) {
		problems.push(`${name}: entry list differs from the committed book; rebuild it`)
		return problems
		}

	for (const entry of builtEntries) {
		if (entry.split('/').some((part) => part.startsWith('.'))) {
			problems.push(`${name}: hidden file in archive: ${entry}`)
			}
		if (! contents(built, entry).equals(contents(committed, entry))) {
			problems.push(`${name}: ${entry} differs from the committed book; rebuild it`)
			}
		}
	return problems
	}

/**
 * Rebuild every test into a temporary directory and compare with the committed books.
 *
 * @returns {string[]} Problems found.
 */
export function checkEpubs () {
	checkZip()
	const output = mkdtempSync(join(tmpdir(), 'i18n-epub-check-'))
	const problems = []
	try {
		const tests = listTests()
		const expected = new Set(tests.map((name) => `${name}.epub`))
		for (const file of readdirSync(join(rootDir, 'readers'))) {
			if (file.endsWith('.epub') && ! expected.has(file)) {
				problems.push(`readers/${file} has no test source; delete it or restore the test`)
				}
			}
		for (const name of tests) {
			const built = buildEpub(name, { outDir: output })
			problems.push(...compareEpub(name, built, join(rootDir, 'readers', `${name}.epub`)))
			}
		}
	finally {
		rmSync(output, { recursive: true, force: true })
		}
	return problems
	}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
	const problems = checkEpubs()
	for (const problem of problems) console.error(`error: ${problem}`)
	if (problems.length) {
		console.error(`${problems.length} problem(s)`)
		process.exitCode = 1
		}
	else {
		console.log('EPUBs are up to date')
		}
	}
