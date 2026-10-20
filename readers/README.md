# EPUB reading system tests

Each directory under `readers/` is one test book. The book is built from the unpacked sources in `EPUB/` into `readers/<test>.epub`. One book tests one feature.

The built books are committed. After changing a test, rebuild and commit the `.epub` as well as the sources.

## Layout

```
readers/
  <test-id>/
    EPUB/
      package.opf       package document
      nav.xhtml         EPUB navigation document
      content_001.xhtml the test book itself
  <test-id>.epub        built book, committed
  tests.js              generated registry of tests
  readers-data.js       recorded results
```

`readers/tests.js` is generated; do not edit it by hand.

## Build

Requires Node.js 18 or later and the Info-ZIP `zip` and `unzip` commands. On Windows, run the scripts under WSL or Git Bash.

```sh
node tools/make-epubs.mjs                  # build every test
node tools/make-epubs.mjs <test> [<test>]  # build selected tests
```

## Test design

Each book should state:

- the assertion,
- any prerequisite (for example, vertical layout),
- the pass, fail and partial criteria,

## Run and record

1. Sideload `readers/<test>.epub` into the reading system and open the book.
2. Compare the rendered sample with the pass criteria in the book.
3. Add an entry to `readers-data.js` under the test identifier.

Statuses:

- `pass`: all pass criteria met.
- `fail`: test run; one or more pass criteria not met.
- `partial`: some but not all criteria met (explain in `notes`).
- `blocked`: a prerequisite is unavailable (explain in `notes`).
- `skipped`: the test was not run.

Record `reader`, `version`, `platform`, `os`, `settings`, `status`, `date` (`yyyy-mm-dd`), and `notes`. `tester`, `evidence` and `build` are optional but make the result reproducible. The latest result for a test and reader column wins.

## Add a test

1. Copy an existing test directory and rename it to a permanent, descriptive identifier.
2. Update `package.opf`: `dc:identifier` should be `https://w3c.github.io/i18n-tests/readers/<test-id>/`, and `dc:title`, `dc:description`, `dc:language`, and `dcterms:modified` should match the test.
3. Update `nav.xhtml` and `content_001.xhtml`.
4. Add an empty array for the test to `readers-data.js` if it is not there.
5. Run `node tools/make-readers-index.mjs` and `node tools/make-epubs.mjs`.
6. Commit the sources, the rebuilt `.epub`, and `tests.js`.

## Validate

```sh
node tools/make-readers-index.mjs --check   # registry is current
node tools/check-readers.mjs                # data and registry are consistent
node tools/check-epubs.mjs                  # committed books match the sources
node --test tools/test/*.test.mjs           # builder and data tests
epubcheck readers/*.epub                    # EPUBCheck, if installed
```

CI runs the same checks and rejects a source change whose committed `.epub` was not rebuilt.

## Results page

`results/readers.html` loads `readers/tests.js` and `readers/readers-data.js`, lists every test (including tests with no results yet), links to the `.epub` and the source, and shows one column per reader/platform combination.
