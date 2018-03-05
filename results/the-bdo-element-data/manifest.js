var tests = {
	'the-bdo-element-001.html': [
	'The bdo element: bdo, dir ltr',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-bdo-element',
	'The bdo element with dir set to ltr causes all contained text to ignore the bidirectional algorithm and displays all characters from left to right.',
	],
	'the-bdo-element-002.html': [
	'The bdo element: bdo, dir rtl',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-bdo-element',
	'The bdo element with dir set to rtl causes all contained text to ignore the bidirectional algorithm and displays all characters from right to left.',
	],
	'the-bdo-element-003.html': [
	'The bdo element: bdo, no dir, rtl context',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-bdo-element',
	'The bdo element with dir not set will not override the Unicode Bidi Algorithm.',
	],
	'the-bdo-element-004.html': [
	'The bdo element: bdo, no dir, ltr context',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-bdo-element',
	'The bdo element with dir not set will not override the Unicode Bidi Algorithm.',
	],
}
