import test from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { loadResults, loadTests, validateReaders } from '../check-readers.mjs'

const rootDir = fileURLToPath(new URL('../..', import.meta.url))

test('the results data passes validation', () => {
	const { errors } = validateReaders(loadTests(), loadResults())
	assert.deepEqual(errors, [])
	})

test('the generated registry is up to date', () => {
	const result = spawnSync(process.execPath, [join(rootDir, 'tools', 'make-readers-index.mjs'), '--check'], {
		cwd: rootDir,
		encoding: 'utf8'
		})
	assert.equal(result.status, 0, result.stderr)
	})

test('validation rejects unknown statuses and unexplained partial results', () => {
	const tests = loadTests()
	const data = {
		[tests[0].id]: [
			{
				reader: 'Example Reader',
				version: '1.0',
				platform: 'Linux',
				os: 'Linux',
				settings: 'defaults',
				status: 'not-a-status',
				date: '2026-10-19',
				notes: ''
				},
			{
				reader: 'Example Reader',
				version: '1.0',
				platform: 'Linux',
				os: 'Linux',
				settings: 'defaults',
				status: 'partial',
				date: '2026-10-19',
				notes: ''
				}
			]
		}
	const { errors } = validateReaders(tests, data)
	assert.ok(errors.some((error) => error.includes('unknown status')))
	assert.ok(errors.some((error) => error.includes('partial status needs an explanation')))
	})
