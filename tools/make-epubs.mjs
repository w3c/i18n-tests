#!/usr/bin/env node
/**
 * Package the reading-system tests under `readers/` into EPUB files.
 *
 * A test directory holds only the parts that differ from test to test, i.e. the
 * package document, the navigation document and the content documents under
 * `EPUB/`. The `mimetype` file and `META-INF/container.xml` are the same for
 * every test, so this script writes them into a staging directory and then
 * zips the result into `readers/<test>.epub`.
 *
 * The `mimetype` file must be the first entry in the archive and must be
 * stored uncompressed (OCF 3.2 § 2.1), hence the two zip calls and `-0`.
 *
 * Builds are reproducible: file timestamps are pinned (to `SOURCE_DATE_EPOCH`,
 * or 1980-01-01 by default), entries are added in sorted order, and the zip
 * command runs with `TZ=UTC`. Hidden files such as `.DS_Store` are not copied.
 *
 * Usage:
 *   node tools/make-epubs.mjs                 # build every test
 *   node tools/make-epubs.mjs <test> [<test>] # build only the named tests
 *
 * @license [W3C Software and Document License](https://www.w3.org/Consortium/Legal/copyright-software)
 */

import { spawnSync } from 'node:child_process'
import {
	cpSync,
	existsSync,
	mkdirSync,
	mkdtempSync,
	readdirSync,
	renameSync,
	rmSync,
	utimesSync,
	writeFileSync
	} from 'node:fs'
import { tmpdir } from 'node:os'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

/** Repository root, derived from this file's location. */
const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Directory holding one subdirectory per reading-system test. */
const readersDir = join(rootDir, 'readers')

/** Earliest timestamp a zip file can represent: 1980-01-01T00:00:00Z. */
const defaultEpoch = 315532800

/** Contents of the OCF container file, which points at the package document. */
const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="EPUB/package.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>
`

/**
 * List the test directories to build.
 *
 * Only directories containing an `EPUB/package.opf` are tests, so unrelated
 * files such as a README in `readers/` are ignored.
 *
 * @param {string[]} requested Names from the command line; empty means all.
 * @returns {string[]} Test directory names.
 */
export function listTests (requested = []) {
	const all = []
	for (const entry of readdirSync(readersDir, { withFileTypes: true })) {
		if (! entry.isDirectory() || entry.name.startsWith('.')) continue
		const packageFile = join(readersDir, entry.name, 'EPUB', 'package.opf')
		if (! existsSync(packageFile)) {
			throw new Error(`readers/${entry.name} is not a test: missing EPUB/package.opf`)
			}
		all.push(entry.name)
		}
	if (requested.length === 0) return all

	for (const name of requested) {
		if (! all.includes(name)) throw new Error(`No such test directory: readers/${name}/EPUB/package.opf`)
		}
	return requested
	}

/**
 * Run a command and fail loudly if it does not succeed.
 *
 * @param {string} command Executable to run.
 * @param {string[]} args Command line arguments.
 * @param {string} cwd Working directory for the command.
 * @param {NodeJS.ProcessEnv} env Environment for the command.
 */
function run (command, args, cwd, env = process.env) {
	const result = spawnSync(command, args, { cwd, env, stdio: 'inherit' })
	if (result.error) throw result.error
	if (result.status !== 0) throw new Error(`${command} exited with status ${result.status}`)
	}

/**
 * Check that the `zip` command is available.
 *
 * The build deliberately uses the system zip tool rather than a dependency;
 * give a useful error instead of a bare ENOENT on Windows or minimal systems.
 */
export function checkZip () {
	const result = spawnSync('zip', ['-v'], { stdio: 'ignore' })
	if (result.error || result.status !== 0) {
		throw new Error(
			'The `zip` command is required to build EPUB files. ' +
			'Install Info-ZIP (on Windows, run this script under WSL or Git Bash).'
			)
		}
	}

/**
 * Return every regular file below a directory, recursively.
 *
 * @param {string} dir Directory to walk.
 * @returns {string[]} Absolute file paths.
 */
function listFiles (dir) {
	const files = []
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name)
		if (entry.isDirectory()) files.push(...listFiles(path))
		else if (entry.isFile()) files.push(path)
		}
	return files
	}

/**
 * Decide whether a source file should be left out of the book.
 *
 * macOS and Windows leave metadata files in directories, and copying them
 * into the archive would be both noisy and non-reproducible.
 *
 * @param {string} path Path to check.
 * @returns {boolean} True if the file should be skipped.
 */
function isIgnored (path) {
	const name = basename(path)
	return name.startsWith('.') ||
		name === 'Thumbs.db' ||
		name === 'desktop.ini'
	}

/**
 * Build the EPUB file for one test.
 *
 * @param {string} name Name of the test directory under `readers/`.
 * @param {{outDir?: string}} [options] Output directory; defaults to `readers/`.
 * @returns {string} Path of the EPUB file that was written.
 */
export function buildEpub (name, { outDir = readersDir } = {}) {
	const source = join(readersDir, name)
	const packageFile = join(source, 'EPUB', 'package.opf')
	if (! existsSync(packageFile)) {
		throw new Error(`Missing package document: readers/${name}/EPUB/package.opf`)
		}

	const epochSeconds = process.env.SOURCE_DATE_EPOCH
		? Number(process.env.SOURCE_DATE_EPOCH)
		: defaultEpoch
	if (! Number.isFinite(epochSeconds)) {
		throw new Error('SOURCE_DATE_EPOCH must be a number of seconds since the Unix epoch')
		}
	const epoch = new Date(epochSeconds * 1000)

	const staging = mkdtempSync(join(tmpdir(), 'i18n-epub-'))
	const target = join(outDir, `${name}.epub`)
	const temporary = join(outDir, `.${name}.tmp.zip`)

	try {
		mkdirSync(outDir, { recursive: true })

		// The mimetype file has no trailing newline, and must not gain one.
		writeFileSync(join(staging, 'mimetype'), 'application/epub+zip')
		mkdirSync(join(staging, 'META-INF'))
		writeFileSync(join(staging, 'META-INF', 'container.xml'), containerXml)
		cpSync(join(source, 'EPUB'), join(staging, 'EPUB'), {
			recursive: true,
			filter: (path) => ! isIgnored(path)
			})

		// Pin timestamps so two builds of the same sources are byte-identical.
		const allFiles = listFiles(staging)
		for (const file of allFiles) utimesSync(file, epoch, epoch)
		const files = allFiles
			.map((file) => relative(staging, file).split(sep).join('/'))
			.filter((file) => file !== 'mimetype')
			.sort()

		rmSync(temporary, { force: true })
		const env = { ...process.env, TZ: 'UTC' }
		run('zip', ['-X', '-0', '-q', temporary, 'mimetype'], staging, env)
		run('zip', ['-X', '-9', '-q', '-D', temporary, ...files], staging, env)

		rmSync(target, { force: true })
		renameSync(temporary, target)
		}
	finally {
		rmSync(staging, { recursive: true, force: true })
		rmSync(temporary, { force: true })
		}
	return target
	}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	checkZip()
	for (const name of listTests(process.argv.slice(2))) {
		console.log(buildEpub(name))
		}
	}
