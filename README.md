# i18n-tests
This repository contains most of the tests created for use with the W3C Internationalization test suite.  The majority test international features of W3C specifications, but there are others that just explore browser support for certain international features.

The tests and the test framework have been moved here from the W3C server, so that they are more easily accessible. The test framework was converted from PHP to run using JavaScript. Tests that require server-side settings, however, remain on the W3C server (these include character encoding and language tests that rely on HTTP headers).

Links on the [main test page](https://www.w3.org/International/tests/) take you to pages that show results for a group of related tests. Click on the links in the left column of those pages to view a test in the test runner.

The tests follow the pattern of the [Web Platform Tests](https://github.com/w3c/web-platform-tests), since it is our aim to copy all appropriate tests to that repository.  The i18n test suite is maintained separately because it contains exploratory tests that don't belong in the WPT repo, and because the tests and their results are arranged so that they can be linked to from educational materials created by the Internationalization activity.

## Notes on structure of the repo

We group tests into batches. There is typically one results page per batch, but sometimes one batch equates to more than one results page.  The results page is an HTML page that groups tests in some useful manner, using headings, provides a link to the individual test, the assertion, and a set of results for major browsers for that test.

A batch file is a list of tests that make up a batch. To read a batch file, you need to know the base – this is the path from the root of the repo to the location of the tests as listed in the batch file.

A batch file is associated with a .json file that contains information such as the assertion, title, etc. for each test in the batch.

Results are stored in data.js files associated with each batch file. There’s a tool available for quickly merging new results with any existing ones.

The process of adding new tests to the test framework is explained at https://w3c.github.io/i18n-tests/tools/PROCESS.html.  A local version of that page is also used to actually run the process.

We have some [guidelines for writing i18n tests](https://github.com/w3c/i18n-activity/wiki/Writing-i18n-tests) that complement the guidelines in the WPT documentation.