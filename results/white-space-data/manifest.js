var tests = {
	'white-space/seg-break-transformation-000.html': [
	'Whitespace and line break transformation',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'All spaces and tabs immediately preceding or following a segment break are removed. If no F, H, W or ZWSP characters involved, the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-001.html': [
	'Wide characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is W and neither side is Hangul, then the segment break is removed.',
	],
	'white-space/seg-break-transformation-002.html': [
	'Fullwidth characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F and neither side is Hangul, then the segment break is removed.',
	],
	'white-space/seg-break-transformation-003.html': [
	'Halfwidth characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is H and neither side is Hangul, then the segment break is removed.',
	],
	'white-space/seg-break-transformation-004.html': [
	'Won and halfwidth characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F or H and neither side is Hangul, then the segment break is removed.',
	],
	'white-space/seg-break-transformation-005.html': [
	'Wide character and non-wide character around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of only one character before and after the line feed is F, W or H and neither side is Hangul, then the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-006.html': [
	'Fullwidth character and non-fullwidth character around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of only one character before and after the line feed is F, W or H and neither side is Hangul, then the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-007.html': [
	'Halfwidth character and non-halfwidth character around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of only one character before and after the line feed is F, W or H and neither side is Hangul, then the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-008.html': [
	'Wide and fullwidth characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed.',
	],
	'white-space/seg-break-transformation-009.html': [
	'Fullwidth and halfwidth characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed.',
	],
	'white-space/seg-break-transformation-010.html': [
	'Hangul characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed. Otherwise, the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-011.html': [
	'Hangul jamo characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed. Otherwise, the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-012.html': [
	'Hangul halfwidth jamo characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed. Otherwise, the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-014.html': [
	'Thai characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed. Otherwise, the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-015.html': [
	'Thai and Latin characters around line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the East Asian Width property of both the character before and after the line feed is F, W or H  and neither side is Hangul, then the segment break is removed. Otherwise, the segment break is converted to a space.',
	],
	'white-space/seg-break-transformation-016.html': [
	'Thai with ZWSP before line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the character immediately before or immediately after the segment break is the zero-width space character (U+200B), then the break is removed, leaving behind the zero-width space.',
	],
	'white-space/seg-break-transformation-017.html': [
	'Thai with ZWSP after line break',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'If the character immediately before or immediately after the segment break is the zero-width space character (U+200B), then the break is removed, leaving behind the zero-width space.',
	],
	'white-space/white-space-collapse-000.html': [
	'White space collapse',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'Every tab is converted to a space. Any space immediately following another collapsible space is collapsed to have zero advance width.',
	],
	'white-space/white-space-collapse-001.html': [
	'White space and non-ASCII spaces',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'Any space immediately following another collapsible space is collapsed to have zero advance width. Only refers to U+0020, not other Unicode spaces.',
	],
	'white-space/white-space-collapse-002.html': [
	'Whitespace and bidi control characters',
	'https://drafts.csswg.org/css-text-3/#line-break-transform',
	'All spaces and tabs immediately preceding or following a segment break are removed, ignoring bidi formatting characters as if they were not there.',
	],
}