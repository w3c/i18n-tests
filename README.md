# i18n-tests
This repository contains most of the tests created for use with the W3C Internationalization test suite.  The majority test international features of W3C specifications, but there are others that just explore browser support for certain international features.

The tests and the test framework have been moved here from the W3C server, so that they are more easily accessible. The test framework was converted from PHP to run using JavaScript. Tests that require server-side settings, however, remain on the W3C server (these include character encoding and language tests that rely on HTTP headers).

Links on the [main test page](https://www.w3.org/International/tests/) take you to pages that show results for a group of related tests. Click on the links in the left column of those pages to view a test in the test runner.

The tests follow the pattern of the [Web Platform Tests](https://github.com/w3c/web-platform-tests), since it is our aim to copy all appropriate tests to that repository.  The i18n test suite is maintained separately because it contains exploratory tests that don't belong in the WPT repo, and because the tests and their results are arranged so that they can be linked to from educational materials created by the Internationalization activity.
