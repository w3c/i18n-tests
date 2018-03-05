var tests = {
	'rli-lri-fsi-pdi-001a.html': [
	'RLI,LRI: isolated from following number, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from a following number.',
	],
	'rli-lri-fsi-pdi-001b.html': [
	'FSI: isolated from following number, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from a following number.',
	],
	'rli-lri-fsi-pdi-001c.html': [
	'RLI,LRI: isolated from following number, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from a following number.',
	],
	'rli-lri-fsi-pdi-002a.html': [
	'RLI,LRI: isolated from following number with intervening neutrals, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from a following number.',
	],
	'rli-lri-fsi-pdi-002b.html': [
	'FSI: isolated from following number with intervening neutrals, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from a following number.',
	],
	'rli-lri-fsi-pdi-002c.html': [
	'RLI,LRI: isolated from following number with intervening neutrals, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from a following number.',
	],
	'rli-lri-fsi-pdi-003a.html': [
	'RLI,LRI: isolated from immediately following number, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'rli-lri-fsi-pdi-003b.html': [
	'FSI: isolated from immediately following number, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'rli-lri-fsi-pdi-003c.html': [
	'RLI,LRI: isolated from immediately following number, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'rli-lri-fsi-pdi-004a.html': [
	'RLI,LRI: numbers isolated from preceding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text numeric content content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from preceding text.',
	],
	'rli-lri-fsi-pdi-004b.html': [
	'FSI: numbers isolated from preceding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text numeric content content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from preceding text.',
	],
	'rli-lri-fsi-pdi-004c.html': [
	'RLI,LRI: numbers isolated from preceding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text numeric content content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from preceding text.',
	],
	'rli-lri-fsi-pdi-005a.html': [
	'RLI,LRI: isolated from following text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from following text.',
	],
	'rli-lri-fsi-pdi-005b.html': [
	'FSI: isolated from following text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from following text.',
	],
	'rli-lri-fsi-pdi-005c.html': [
	'RLI,LRI: isolated from following text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from following text.',
	],
	'rli-lri-fsi-pdi-006a.html': [
	'RLI,LRI: isolated from following text with intervening neutrals, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'rli-lri-fsi-pdi-006b.html': [
	'FSI: isolated from following text with intervening neutrals, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'rli-lri-fsi-pdi-006c.html': [
	'RLI,LRI: isolated from following text with intervening neutrals, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'rli-lri-fsi-pdi-007a.html': [
	'RLI,LRI: isolated from immediately following text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'rli-lri-fsi-pdi-007b.html': [
	'FSI: isolated from immediately following text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'rli-lri-fsi-pdi-007c.html': [
	'RLI,LRI: isolated from immediately following text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'rli-lri-fsi-pdi-008a.html': [
	'RLI,LRI: isolated from preceding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from preceding text.',
	],
	'rli-lri-fsi-pdi-008b.html': [
	'FSI: isolated from preceding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from preceding text.',
	],
	'rli-lri-fsi-pdi-008c.html': [
	'RLI,LRI: isolated from preceding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from preceding text.',
	],
	'rli-lri-fsi-pdi-009a.html': [
	'RLI,LRI: isolated from surrounding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'rli-lri-fsi-pdi-009b.html': [
	'FSI: isolated from surrounding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by FSI...PDI is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'rli-lri-fsi-pdi-009c.html': [
	'RLI,LRI: isolated from surrounding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Plain text content surrounded by RLI/LRI...PDI is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'brackets-001.html': [
	'RTL base, ltr parens',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'The bidi algorithm will keep parentheses around Latin text at the boundary of two runs with a RTL base direction.',
	],
	'brackets-002.html': [
	'RTL base, ltr square brackets',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'The bidi algorithm will keep square brackets around Latin text at the boundary of two runs with a RTL base direction.',
	],
	'brackets-003.html': [
	'RTL base, ltr curly brackets',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'The bidi algorithm will keep curly brackets around Latin text at the boundary of two runs with a RTL base direction.',
	],
	'brackets-010.html': [
	'RTL base, ltr mismatched parens',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'The bidi algorithm will NOT keep paired characters around Latin text at the boundary of two runs with a RTL base direction if the paired characters are not the same.',
	],
}
