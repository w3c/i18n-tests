/*
	Results for the reading system tests in the readers/ directory.

	Each key is a test identifier: the directory name under readers/, which is also the
	name of the .epub file and the last path segment of the dc:identifier of the EPUB
	built from it.

	Each entry records one reading system. The status values are pass, fail, partial,
	blocked, skipped. When several results exist for the same test and reader column,
	the one with the latest date wins.

	Fields:
	- reader   name of the reading system
	- version  version of the reading system
	- platform platform family, such as macOS, iOS, Android, Windows, Linux or e-ink;
	           used to keep, for example, Apple Books on macOS and iOS apart
	- os       operating system version the reading system was run on
	- settings rendering settings that affect the result, such as "default font size, light theme"; omit if they were the defaults
	- status   pass | fail | partial | blocked | skipped
	           blocked means a prerequisite is unmet; explain it in notes.
	           partial means some but not all pass criteria were met; explain in notes.
	           skipped means the test was not run.
	- date     date the test was run, as yyyy-mm-dd
	- notes    what the reader needs to know, especially for partial or blocked results
	- tester   optional name of the person who ran the test
	- evidence optional URL to a screenshot or issue with the observation
	- build    optional dcterms:modified value of the EPUB that was tested
*/
var readerresults = {

"text-emphasis-position-horizontal-under": [
	{"reader":"Apple Books", "version":"8.5", "platform":"macOS", "os":"macOS 26.6.2", "settings":"default settings", "status":"pass", "date":"2026-10-20", "notes":"", "build":"2026-10-19T00:00:00Z"},
	{"reader":"Thorium", "version":"3.5.1", "platform":"macOS", "os":"macOS 26.6.2", "settings":"default settings", "status":"pass", "date":"2026-10-20", "notes":"", "build":"2026-10-19T00:00:00Z"}
	],

"text-emphasis-position-vertical-left": [
	{"reader":"Apple Books", "version":"8.5", "platform":"macOS", "os":"macOS 26.6.2", "settings":"default settings", "status":"pass", "date":"2026-10-20", "notes":"", "build":"2026-10-19T00:00:00Z"},
	{"reader":"Thorium", "version":"3.5.1", "platform":"macOS", "os":"macOS 26.6.2", "settings":"default settings", "status":"pass", "date":"2026-10-20", "notes":"", "build":"2026-10-19T00:00:00Z"}
	]

}
