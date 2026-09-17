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
 * stored uncompressed (OCF 3.2 § 2.1), hence the two zip calls.
 *
 * Usage:
 *   node tools/make-epubs.mjs                 # build every test
 *   node tools/make-epubs.mjs <test> [<test>] # build only the named tests
 *
 * @license [W3C Software and Document License](https://www.w3.org/Consortium/Legal/copyright-software)
 */

import { spawnSync } from 'node:child_process'
import { cpSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/** Repository root, derived from this file's location. */
const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Directory holding one subdirectory per reading-system test. */
const readersDir = join(rootDir, 'readers')

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
 * @param {string[]} requested Names from the command line; empty means all.
 * @returns {string[]} Test directory names.
 */
function listTests (requested) {
	const all = readdirSync(readersDir).filter((name) => {
		return statSync(join(readersDir, name)).isDirectory()
		})
	if (requested.length === 0) return all

	for (const name of requested) {
		if (! all.includes(name)) throw new Error(`No such test directory: readers/${name}`)
		}
	return requested
	}

/**
 * Run a command and fail loudly if it does not succeed.
 *
 * @param {string} command Executable to run.
 * @param {string[]} args Command line arguments.
 * @param {string} cwd Working directory for the command.
 */
function run (command, args, cwd) {
	const result = spawnSync(command, args, { cwd, stdio: 'inherit' })
	if (result.error) throw result.error
	if (result.status !== 0) throw new Error(`${command} exited with status ${result.status}`)
	}

/**
 * Build the EPUB file for one test.
 *
 * @param {string} name Name of the test directory under `readers/`.
 * @returns {string} Path of the EPUB file that was written.
 */
function buildEpub (name) {
	const source = join(readersDir, name)
	const staging = mkdtempSync(join(tmpdir(), 'i18n-epub-'))
	const target = join(readersDir, `${name}.epub`)

	try {
		// The mimetype file has no trailing newline, and must not gain one.
		writeFileSync(join(staging, 'mimetype'), 'application/epub+zip')
		mkdirSync(join(staging, 'META-INF'))
		writeFileSync(join(staging, 'META-INF', 'container.xml'), containerXml)
		cpSync(join(source, 'EPUB'), join(staging, 'EPUB'), { recursive: true })

		rmSync(target, { force: true })
		run('zip', ['-X', '-q', target, 'mimetype'], staging)
		run('zip', ['-rDX9', '-q', target, '.', '-x', 'mimetype'], staging)
		}
	finally {
		rmSync(staging, { recursive: true, force: true })
		}
	return target
	}

for (const name of listTests(process.argv.slice(2))) {
	console.log(buildEpub(name))
	}
