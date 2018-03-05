var tests = {
	'word-break-normal-en-000.html': [
	'word-break: normal, latin',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-ar-000.html': [
	'word-break: normal, arabic',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-bo-000.html': [
	'word-break: normal, tibetan',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-hi-000.html': [
	'word-break: normal, hindi',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-ja-000.html': [
	'word-break: normal, japanese',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-ja-001.html': [
	'word-break: normal, japanese hiragana',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-ja-002.html': [
	'word-break: normal, japanese katakana',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-ja-004.html': [
	'word-break: normal, japanese',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-km-000.html': [
	'word-break: normal, khmer',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-ko-000.html': [
	'word-break: normal, korean',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules. Korean, which commonly exhibits two different behaviors, allows breaks between any two consecutive Hangul/Hanja.',
	],
	'word-break-normal-lo-000.html': [
	'word-break: normal, lao',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-my-000.html': [
	'word-break: normal, myanmar',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-tdd-000.html': [
	'word-break: normal, tai nüa',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-th-000.html': [
	'word-break: normal, thai',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-zh-000.html': [
	'word-break: normal, chinese',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules.',
	],
	'word-break-normal-001.html': [
	'word-break: normal, zwsp',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: normal means words break according to their customary rules. A ZWSP character should provide a break point.',
	],
	'word-break-break-all-000.html': [
	'word-break: break-all, japanese',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units.',
	],
	'word-break-break-all-001.html': [
	'word-break: break-all, latin',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units.',
	],
	'word-break-break-all-002.html': [
	'word-break: break-all, korean',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units.',
	],
	'word-break-break-all-003.html': [
	'word-break: break-all, thai',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units.',
	],
	'word-break-break-all-004.html': [
	'word-break: break-all, arabic',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units. When shaping scripts such as Arabic are allowed to break within words due to break-all, the characters must still be shaped as if the word were not broken.',
	],
	'word-break-break-all-005.html': [
	'word-break: break-all, subjoined tibetan',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units.',
	],
	'word-break-break-all-006.html': [
	'word-break: break-all, spacing vowel sign',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units. A spacing vowel sign should be wrapped to the next line with its base character.',
	],
	'word-break-break-all-007.html': [
	'word-break: break-all, combining diacritic',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: break-all means lines may break between any two typographic letter units. An combining diacritic plus base character should be wrapped as a unit to the next line.',
	],
	'word-break-break-all-008.html': [
	'word-break: break-all, syllabic cluster',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'[Exploratory test] word-break: break-all means lines may break between any two typographic letter units. An indic syllable cluster should be wrapped as a unit to the next line.',
	],
	'word-break-keep-all-000.html': [
	'word-break: keep-all, latin',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: keep-all means breaking is forbidden within "words".',
	],
	'word-break-keep-all-001.html': [
	'word-break: keep-all, japanese',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: keep-all means breaking is forbidden within "words".  In this style, sequences of CJK characters do not break.',
	],
	'word-break-keep-all-002.html': [
	'word-break: keep-all, korean',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: keep-all means breaking is forbidden within "words".  In this style, sequences of CJK characters do not break.',
	],
	'word-break-keep-all-003.html': [
	'word-break: keep-all, thai',
	'https://drafts.csswg.org/css-text-3/#word-break-property',
	'word-break: keep-all means breaking is forbidden within "words",  except where opportunities exist due to dictionary-based breaking (such as in Thai).',
	],
}
