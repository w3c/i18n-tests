#!/usr/bin/env node
/**
 * Validate the reading-system test registry and results data.
 *
 * The results page is deliberately data-driven, so a typo in a test identifier,
 * an unknown status, or an ambiguous date can quietly produce a wrong table.
 * This script is the CI gate for those mistakes.
 *
 * Usage:
 *   node tools/check-readers.mjs
 *
 * @license [W3C Software and Document License](https://www.w3.org/Consortium/Legal/copyright-software)
 */

import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import vm from 'node:vm'

/** Repository root, derived from this file's location. */
const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

/** Generated registry of tests. */
const registryFile = join(rootDir, 'readers', 'tests.js')

/** Manually maintained results data. */
const dataFile = join(rootDir, 'readers', 'readers-data.js')

/** Status values understood by the results page. */
const statuses = new Set(['pass', 'fail', 'partial', 'blocked', 'skipped'])

/**
 * Load a browser-style JavaScript data file in an isolated context.
 *
 * The files use `var` so that they can be loaded with a plain script tag, which
 * also makes them convenient to evaluate here without a build step.
 *
 * @param {string} file Path to the JavaScript file.
 * @returns {object} The context containing the file's globals.
 */
export function loadScript (file) {
	const context = {}
	vm.runInNewContext(readFileSync(file, 'utf8'), context, { filename: file, timeout: 1000 })
	return context
	}

/**
 * Load the generated test registry.
 *
 * @returns {object[]} Test metadata.
 */
export function loadTests () {
	const context = loadScript(registryFile)
	if (! Array.isArray(context.readertests)) throw new Error(`${registryFile} does not define readertests`)
	return context.readertests
	}

/**
 * Load the results data.
 *
 * @returns {object} Results keyed by test identifier.
 */
export function loadResults () {
	const context = loadScript(dataFile)
	if (! context.readerresults || typeof context.readerresults !== 'object') {
		throw new Error(`${dataFile} does not define readerresults`)
		}
	return context.readerresults
	}

/**
 * Check the registry and results data for consistency.
 *
 * @param {object[]} tests Test registry.
 * @param {object} data Results keyed by test identifier.
 * @returns {{errors: string[], warnings: string[]}} Validation messages.
 */
export function validateReaders (tests, data) {
	const errors = []
	const warnings = []
	const ids = new Set()

	for (const test of tests) {
		if (! test.id) errors.push('Registry entry without an id')
		else if (ids.has(test.id)) errors.push(`Duplicate test id in registry: ${test.id}`)
		else ids.add(test.id)

		for (const field of ['title', 'assert', 'help', 'identifier', 'modified']) {
			if (! test[field]) errors.push(`${test.id || '(unknown test)'}: missing ${field}`)
			}
		if (test.id && ! /^[a-z0-9-]+$/.test(test.id)) {
			errors.push(`${test.id}: test id must use lowercase letters, digits and hyphens`)
			}
		if (test.help && ! /^https?:\/\//.test(test.help)) {
			errors.push(`${test.id}: help must be an http(s) URL`)
			}
		if (test.modified && (! /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(test.modified) || Number.isNaN(Date.parse(test.modified)))) {
			errors.push(`${test.id}: modified must be a valid UTC timestamp such as 2026-10-19T00:00:00Z`)
			}
		if (test.identifier && test.id && ! test.identifier.endsWith(`/${test.id}/`)) {
			errors.push(`${test.id}: identifier should end with /${test.id}/`)
			}
		if (! Array.isArray(test.languages) || test.languages.length === 0) {
			errors.push(`${test.id}: languages must be a non-empty array`)
			}
		}

	const seen = new Set()
	for (const test of Object.keys(data)) {
		if (! ids.has(test)) {
			errors.push(`Results for unknown test: ${test}`)
			continue
			}
		if (! Array.isArray(data[test])) {
			errors.push(`Results for ${test} must be an array`)
			continue
			}

		for (const result of data[test]) {
			const where = `${test} / ${result.reader || '(unknown reader)'}`
			for (const field of ['reader', 'status', 'date']) {
				if (! result[field]) errors.push(`${where}: missing ${field}`)
				}
			if (result.status && ! statuses.has(result.status)) {
				errors.push(`${where}: unknown status ${JSON.stringify(result.status)}`)
				}
			if (result.date && (! /^\d{4}-\d{2}-\d{2}$/.test(result.date) || Number.isNaN(Date.parse(`${result.date}T00:00:00Z`)))) {
				errors.push(`${where}: date must be a valid yyyy-mm-dd date`)
				}
			if ((result.status === 'partial' || result.status === 'blocked') && ! result.notes) {
				errors.push(`${where}: the ${result.status} status needs an explanation in notes`)
				}
			if (! result.settings) {
				warnings.push(`${where}: no settings recorded; note publisher styles, font size and theme if they differ from the defaults`)
				}
			if (! result.version) warnings.push(`${where}: no reading system version recorded`)
			if (! result.platform && ! result.os) warnings.push(`${where}: no platform or operating system recorded`)

			const key = [test, result.reader, result.platform, result.version, result.os, result.date].join('\u0000')
			if (seen.has(key)) errors.push(`${where}: duplicate result for the same platform, version and date`)
			else seen.add(key)
			}
		}

	for (const test of ids) {
		if (! Object.prototype.hasOwnProperty.call(data, test)) {
			warnings.push(`${test}: no results entry in readers-data.js`)
			}
		}

	return { errors, warnings }
	}

/** Run the checks and exit non-zero on errors. */
function main () {
	const { errors, warnings } = validateReaders(loadTests(), loadResults())
	for (const warning of warnings) console.warn(`warning: ${warning}`)
	for (const error of errors) console.error(`error: ${error}`)
	if (errors.length) {
		console.error(`${errors.length} error(s), ${warnings.length} warning(s)`)
		process.exitCode = 1
		return
		}
	console.log(`Readers data OK (${warnings.length} warning(s))`)
	}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
	main()
	}
