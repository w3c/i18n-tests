import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { buildEpub, checkZip, listTests } from '../make-epubs.mjs'
import { checkEpubs } from '../check-epubs.mjs'

let hasZip = true
try {
	checkZip()
	}
catch {
	hasZip = false
	}

test('lists the reading-system tests', () => {
	const tests = listTests()
	assert.ok(tests.includes('text-emphasis-position-horizontal-under'))
	assert.ok(tests.includes('text-emphasis-position-vertical-left'))
	})

test('builds an OCF container with a stored mimetype first', { skip: ! hasZip }, () => {
	const outDir = mkdtempSync(join(tmpdir(), 'i18n-epub-test-'))
	try {
		const epub = buildEpub('text-emphasis-position-vertical-left', { outDir })
		const names = spawnSync('unzip', ['-Z1', epub], { encoding: 'utf8' })
		assert.equal(names.status, 0, names.stderr)
		const entries = names.stdout.trim().split('\n')
		assert.equal(entries[0], 'mimetype')
		assert.ok(entries.includes('META-INF/container.xml'))
		assert.ok(entries.includes('EPUB/package.opf'))
		assert.ok(entries.every((entry) => ! entry.split('/').some((part) => part.startsWith('.'))))

		const verbose = spawnSync('unzip', ['-v', epub], { encoding: 'utf8' })
		assert.equal(verbose.status, 0, verbose.stderr)
		const mimetypeLine = verbose.stdout.split('\n').find((line) => /\bmimetype\s*$/.test(line))
		assert.ok(mimetypeLine, 'mimetype entry missing from unzip -v output')
		assert.match(mimetypeLine, /\bStored\b/)
		}
	finally {
		rmSync(outDir, { recursive: true, force: true })
		}
	})

test('produces byte-identical archives on rebuild', { skip: ! hasZip }, () => {
	const first = mkdtempSync(join(tmpdir(), 'i18n-epub-test-'))
	const second = mkdtempSync(join(tmpdir(), 'i18n-epub-test-'))
	try {
		const a = buildEpub('text-emphasis-position-horizontal-under', { outDir: first })
		const b = buildEpub('text-emphasis-position-horizontal-under', { outDir: second })
		assert.deepEqual(readFileSync(a), readFileSync(b))
		}
	finally {
		rmSync(first, { recursive: true, force: true })
		rmSync(second, { recursive: true, force: true })
		}
	})

test('committed EPUBs match the current sources', { skip: ! hasZip }, () => {
	assert.deepEqual(checkEpubs(), [])
	})
