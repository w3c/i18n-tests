var tests = {
	'selectors-normalization-001.html': [
	'CSS3 Selectors: markup precomposed, CSS precomposed',
	'http://www.w3.org/TR/selectors/#lang-pseudo',
	'[Exploratory test] A fully precomposed class name will match a fully precomposed CSS selector name.',
	],
	'selectors-normalization-002.html': [
	'CSS3 Selectors: markup decomposed, CSS decomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A fully decomposed class name will match a fully decomposed CSS selector name.',
	],
	'selectors-normalization-003.html': [
	'CSS3 Selectors: markup decomposed, CSS precomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A fully decomposed class name will NOT match a fully precomposed CSS selector name.',
	],
	'selectors-normalization-004.html': [
	'CSS3 Selectors: markup precomposed, CSS decomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A fully precomposed class name will NOT match a fully decomposed CSS selector name.',
	],
	'selectors-normalization-005.html': [
	'CSS3 Selectors: markup partially decomposed, CSS precomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A partially decomposed class name will NOT match a fully precomposed CSS selector name.',
	],
	'selectors-normalization-006.html': [
	'CSS3 Selectors: markup partially decomposed, CSS decomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A partially decomposed class name will NOT match a fully decomposed CSS selector name.',
	],
	'selectors-normalization-007.html': [
	'CSS3 Selectors: markup precomposed, CSS partially decomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A partially decomposed CSS selector name will NOT match a fully precomposed class name.',
	],
	'selectors-normalization-008.html': [
	'CSS3 Selectors: markup decomposed, CSS partially decomposed',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory test] A partially decomposed CSS selector name will NOT match a fully decomposed class name.',
	],
}
