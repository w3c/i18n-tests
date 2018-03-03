var tests = {
	'hyphens-auto-001.html': [
	'hyphens:auto',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:auto means words may be broken at hyphenation opportunities determined automatically by a language-appropriate hyphenation resource.',
	],
	'hyphens-auto-002.html': [
	'hyphens:auto, with soft hyphen',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'Automatic hyphenation opportunities within a word must be ignored if the word contains a conditional hyphen (­ or U+00AD), in favor of the conditional hyphen(s).',
	],
	'hyphens-auto-003.html': [
	'hyphens:auto, no language',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'The UA is only required to automatically hyphenate text for which the content language is known.',
	],
	'hyphens-auto-004.html': [
	'hyphens:auto, lang=""',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'The UA is only required to automatically hyphenate text for which the content language is known.',
	],
	'hyphens-auto-005.html': [
	'hyphens:auto, arabic hyphenation',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:auto means words may be broken at hyphenation opportunities determined automatically by a language-appropriate hyphenation resource This control test checks for arabic hyphenation support.',
	],
	'hyphens-auto-006.html': [
	'hyphens:auto, arabic joining',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'When shaping scripts such as Arabic are allowed to break within words due to hyphenation, the characters must still be shaped as if the word were not broken.',
	],
	'hyphens-manual-001.html': [
	'hyphens:manual',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:manual means words are hyphenated where there are characters inside the word that explicitly suggest hyphenation opportunities.',
	],
	'hyphens-manual-002.html': [
	'hyphens:manual, no soft hyphen',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:manual means words are ONLY hyphenated where there are characters inside the word that explicitly suggest hyphenation opportunities.',
	],
	'hyphens-manual-003.html': [
	'hyphens:manual, soft hyphens hidden by default',
	'http://dev.w3.org/csswg/css-text-3/#word-break-property',
	'When a word is not broken the UA will not display a hyphen-like glyph inside a word containing soft hyphens.',
	],
	'hyphens-manual-004.html': [
	'hyphens:manual, arabic joining',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'When shaping scripts such as Arabic are allowed to break within words due to hyphenation, the characters must still be shaped as if the word were not broken.',
	],
	'hyphens-none-001.html': [
	'hyphens:none',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:none means words are not hyphenated.',
	],
	'hyphens-none-002.html': [
	'hyphens:none, soft-hyphens',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:none means words are not hyphenated, even if characters inside the word explicitly define hyphenation opportunities.',
	],
	'prefixed/hyphens-auto-001.html': [
	'hyphens:auto',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:auto means words may be broken at hyphenation opportunities determined automatically by a language-appropriate hyphenation resource.',
	],
	'prefixed/hyphens-auto-002.html': [
	'hyphens:auto, with soft hyphen',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'Automatic hyphenation opportunities within a word must be ignored if the word contains a conditional hyphen (­ or U+00AD), in favor of the conditional hyphen(s).',
	],
	'prefixed/hyphens-auto-003.html': [
	'hyphens:auto, no language',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'The UA is only required to automatically hyphenate text for which the content language is known.',
	],
	'prefixed/hyphens-auto-004.html': [
	'hyphens:auto, lang=""',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'The UA is only required to automatically hyphenate text for which the content language is known.',
	],
	'prefixed/hyphens-auto-005.html': [
	'hyphens:auto, arabic hyphenation',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:auto means words may be broken at hyphenation opportunities determined automatically by a language-appropriate hyphenation resource This control test checks for arabic hyphenation support.',
	],
	'prefixed/hyphens-auto-006.html': [
	'hyphens:auto, arabic joining',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'When shaping scripts such as Arabic are allowed to break within words due to hyphenation, the characters must still be shaped as if the word were not broken.',
	],
	'prefixed/hyphens-manual-001.html': [
	'hyphens:manual',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:manual means words are hyphenated where there are characters inside the word that explicitly suggest hyphenation opportunities.',
	],
	'prefixed/hyphens-manual-002.html': [
	'hyphens:manual, no soft hyphen',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:manual means words are ONLY hyphenated where there are characters inside the word that explicitly suggest hyphenation opportunities.',
	],
	'prefixed/hyphens-manual-003.html': [
	'hyphens:manual, soft hyphens hidden by default',
	'http://dev.w3.org/csswg/css-text-3/#word-break-property',
	'When a word is not broken the UA will not display a hyphen-like glyph inside a word containing soft hyphens.',
	],
	'prefixed/hyphens-manual-004.html': [
	'hyphens:manual, arabic joining',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'When shaping scripts such as Arabic are allowed to break within words due to hyphenation, the characters must still be shaped as if the word were not broken.',
	],
	'prefixed/hyphens-none-001.html': [
	'hyphens:none',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:none means words are not hyphenated.',
	],
	'prefixed/hyphens-none-002.html': [
	'hyphens:none, soft-hyphens',
	'http://dev.w3.org/csswg/css-text-3/#hyphens-property',
	'hyphens:none means words are not hyphenated, even if characters inside the word explicitly define hyphenation opportunities.',
	],
}
