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
	'dir-isolation-001a.html': [
	'The dir attribute: isolated from following number, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-001b.html': [
	'The dir attribute: isolated from following number, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-001c.html': [
	'The dir attribute: isolated from following number, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-002a.html': [
	'The dir attribute: isolated from following number with intervening neutrals, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-002b.html': [
	'The dir attribute: isolated from following number with intervening neutrals, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-002c.html': [
	'The dir attribute: isolated from following number with intervening neutrals, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-003a.html': [
	'The dir attribute: isolated from immediately following number, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'dir-isolation-003b.html': [
	'The dir attribute: isolated from immediately following number, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'dir-isolation-003c.html': [
	'The dir attribute: isolated from immediately following number, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'dir-isolation-004a.html': [
	'The dir attribute: numbers isolated from preceding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Numeric element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-004b.html': [
	'The dir attribute: numbers isolated from preceding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Numeric element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-004c.html': [
	'The dir attribute: numbers isolated from preceding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Numeric element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-005a.html': [
	'The dir attribute: isolated from following text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text.',
	],
	'dir-isolation-005b.html': [
	'The dir attribute: isolated from following text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text.',
	],
	'dir-isolation-005c.html': [
	'The dir attribute: isolated from following text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text.',
	],
	'dir-isolation-006a.html': [
	'The dir attribute: isolated from following text with intervening neutrals, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'dir-isolation-006b.html': [
	'The dir attribute: isolated from following text with intervening neutrals, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'dir-isolation-006c.html': [
	'The dir attribute: isolated from following text with intervening neutrals, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'dir-isolation-007a.html': [
	'The dir attribute: isolated from immediately following text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'dir-isolation-007b.html': [
	'The dir attribute: isolated from immediately following text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'dir-isolation-007c.html': [
	'The dir attribute: isolated from immediately following text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'dir-isolation-008a.html': [
	'The dir attribute: isolated from preceding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-008b.html': [
	'The dir attribute: isolated from preceding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-008c.html': [
	'The dir attribute: isolated from preceding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-009a.html': [
	'The dir attribute: isolated from surrounding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'dir-isolation-009b.html': [
	'The dir attribute: isolated from surrounding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'dir-isolation-009c.html': [
	'The dir attribute: isolated from surrounding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'dir-isolation-shim-001a.html': [
	'The dir attribute: isolated from following number, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-shim-001b.html': [
	'The dir attribute: isolated from following number, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-shim-001c.html': [
	'The dir attribute: isolated from following number, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-shim-002a.html': [
	'The dir attribute: isolated from following number with intervening neutrals, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-shim-002b.html': [
	'The dir attribute: isolated from following number with intervening neutrals, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-shim-002c.html': [
	'The dir attribute: isolated from following number with intervening neutrals, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from a following number.',
	],
	'dir-isolation-shim-003a.html': [
	'The dir attribute: isolated from immediately following number, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'dir-isolation-shim-003b.html': [
	'The dir attribute: isolated from immediately following number, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'dir-isolation-shim-003c.html': [
	'The dir attribute: isolated from immediately following number, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and is directionally isolated from a following number, even with no intervening white space.',
	],
	'dir-isolation-shim-004a.html': [
	'The dir attribute: numbers isolated from preceding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Numeric element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-shim-004b.html': [
	'The dir attribute: numbers isolated from preceding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Numeric element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-shim-004c.html': [
	'The dir attribute: numbers isolated from preceding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Numeric element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-shim-005a.html': [
	'The dir attribute: isolated from following text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text.',
	],
	'dir-isolation-shim-005b.html': [
	'The dir attribute: isolated from following text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text.',
	],
	'dir-isolation-shim-005c.html': [
	'The dir attribute: isolated from following text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text.',
	],
	'dir-isolation-shim-006a.html': [
	'The dir attribute: isolated from following text with intervening neutrals, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'dir-isolation-shim-006b.html': [
	'The dir attribute: isolated from following text with intervening neutrals, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'dir-isolation-shim-006c.html': [
	'The dir attribute: isolated from following text with intervening neutrals, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text despite intervening neutrals.',
	],
	'dir-isolation-shim-007a.html': [
	'The dir attribute: isolated from immediately following text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'dir-isolation-shim-007b.html': [
	'The dir attribute: isolated from immediately following text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'dir-isolation-shim-007c.html': [
	'The dir attribute: isolated from immediately following text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from following text even with no intervening white space.',
	],
	'dir-isolation-shim-008a.html': [
	'The dir attribute: isolated from preceding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-shim-008b.html': [
	'The dir attribute: isolated from preceding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-shim-008c.html': [
	'The dir attribute: isolated from preceding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from preceding text.',
	],
	'dir-isolation-shim-009a.html': [
	'The dir attribute: isolated from surrounding text, opposite direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'dir-isolation-shim-009b.html': [
	'The dir attribute: isolated from surrounding text, auto',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from surrounding text.',
	],
	'dir-isolation-shim-009c.html': [
	'The dir attribute: isolated from surrounding text, same direction',
	'http://www.w3.org/TR/html5/dom.html#requirements-relating-to-the-bidirectional-algorithm',
	'Element content with a dir attribute is treated as a neutral character and directionally isolated from surrounding text.',
	],
}
