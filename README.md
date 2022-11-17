# i18n-tests
This repository contains most of the tests created for use with the W3C Internationalization test suite and others that are more interactive in nature.  The majority test international features of W3C specifications, but there are others that just explore browser support for certain international features.

There are two main types of test:
1. standard tests written in HTML files that are accessed via the i18n test suite, and
2. interactive tests, which are accessed via test script pages in the wiki of this repository.

To find tests go to the [Test Index page](https://www.w3.org/International/i18n-tests/).

## Interactive tests

Interactive tests allow you to quickly set up test scenarios with minimal formality. They are particularly useful for tests that have many permutations on a language-by-language basis, and can be easier to manage for people creating gap-analysis documents.

The test pages themselves allow you to set various CSS properties or other aspects of the page, including the text to be tested, by interacting with form controls on the test page.  This allows for a great deal of flexibility in exploring features, and changes can be rapidly made to explore a range of scenarios. 

You can then take a snapshot of the settings and add that as a URL to a wiki page in this repo as part of a test script. There are test scripts for each of the sections in the Language Enablement Index. Having created a test, it is very quick and simple to point back to it from the test script and report findings.

For more information, see [Working with interactive tests](https://www.w3.org/International/i18n-drafts/pages/interactive_tests). 

Tests in a test script could be converted to standard tests at some point if resources become available to do the work.

## Standard tests

These tests and the test framework have been moved here from the W3C server, so that they are more easily accessible. The test framework was converted from PHP to run using JavaScript. Tests that require server-side settings, however, remain on the W3C server (these include character encoding and language tests that rely on HTTP headers).

Links on the [main test page](https://www.w3.org/International/i18n-tests/) take you to pages that show results for a group of related tests. Click on the links in the left column of those pages to view a test in the test runner.

The tests follow the pattern of the [Web Platform Tests](https://github.com/w3c/web-platform-tests), since it is our aim to copy all appropriate tests to that repository.  The i18n test suite is maintained separately because it contains exploratory tests that don't belong in the WPT repo, and because the tests and their results are arranged so that they can be linked to from educational materials created by the Internationalization activity.

We have some [guidelines for writing i18n tests](https://github.com/w3c/i18n-activity/wiki/Writing-i18n-tests) that complement the guidelines in the WPT documentation.

## Notes on structure of the repo

We group tests into batches. There is typically one results page per batch, but sometimes one batch equates to more than one results page.  The results page is an HTML page that groups tests in some useful manner, using headings, provides a link to the individual test, the assertion, and a set of results for major browsers for that test.

A batch file is a list of tests that make up a batch. To read a batch file, you need to know the base – this is the path from the root of the repo to the location of the tests as listed in the batch file.

A batch file is associated with a .json file that contains information such as the assertion, title, etc. for each test in the batch.

Results are stored in data.js files associated with each batch file. There’s a tool available for quickly merging new results with any existing ones.

## Moving tests to the test framework

The process of adding new tests to the test framework is explained at https://w3c.github.io/i18n-tests/tools/PROCESS.html.  A local version of that page is used to actually run the process. You'll need PHP to run the various scripts called by that page (and therefore you'll need to run the page under localhost).

That page helps you with the following steps. In most cases it is just a question of ensuring you give the name and path for the batch and then press a button to generate files or data.

1. setting up a batch file and associated data and json files once you have set of test files to add to the test framework
2. running the tests to check that they work
3. create a partially filled-out results file for the batch from a template
4. add test results to the data file.

The first 3 steps are typically run together when adding a set of files to the repository and framework. Step 4 can be run any time you have results to add to the results page for a batch.


## Porting tests to WPT

The WPT folks prefer script-based tests or ref tests, but will also accept manual tests when it's not possible to automate the test.  This is fairly common for i18n tests.  

We should try to ensure that tests we create are scripted or ref tests wherever possible, but we may also add 'workings' to the displayed file, rather than just show a green/red blob.  This is because our tests are also used for education, not only for nightly testing of browsers.

In some cases, we may need to change the way a test works before porting to WPT. For example, overlaying test text over red ref text often provides a very effective way for humans to spot differences (esp for tests with multiple components, such as text-transform tests), however there is some concern that occasional the subpixel bleeding of the red colour may interfere with the automated ref test mechanism.  In such cases we need to adapt the test before porting to WPT.  Hopefully, this will typically involve only removing some CSS statements (however, we need to check that).

Once a set of tests has been ported to WPT, we should track any changes to those tests, and if they are substantive we should retrofit the changes to the tests in our own repo.
