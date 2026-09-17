/*
	Results for the reading system tests in the readers/ directory.

	Each key is a test identifier: the directory name under readers/, which is also the
	dc:identifier of the EPUB built from it and the name of the .epub file.

	Each entry records one reading system. The status values are the same ones the browser
	test runner uses: pass, fail, partial, skipped. When several results exist for the same
	reading system, the last one wins, as in the browser data files.

	Fields:
	- reader   name of the reading system
	- version  version of the reading system
	- os       operating system the reading system was run on
	- status   pass | fail | partial | skipped
	- date     date the test was run, as d-m-yyyy
	- notes    what the reader needs to know, especially for a partial pass
*/
var readerresults = {

"text-emphasis-position-vertical": [
	{"reader":"Apple Books", "version":"8.5", "os":"macOS 26.6.2", "status":"pass", "date":"16-9-2026", "notes":""},
	{"reader":"Thorium", "version":"3.5.1", "os":"macOS 26.6.2", "status":"pass", "date":"16-9-2026", "notes":""}
	]

}
