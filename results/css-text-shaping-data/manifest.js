var tests = {
	'shaping-000.html': [
	'shaping: span',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries with no styling change.',
	],
	'shaping-001.html': [
	'shaping: colour',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes to colour.',
	],
	'shaping-002.html': [
	'shaping: font-weight',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes in font weight.',
	],
	'shaping-003.html': [
	'shaping: font-style',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes in font style.',
	],
	'shaping-004.html': [
	'shaping: margin 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when margin is set to 0.',
	],
	'shaping-005.html': [
	'shaping: padding 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when padding is set to 0.',
	],
	'shaping-006.html': [
	'shaping: border 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when border is set to 0.',
	],
	'shaping-007.html': [
	'shaping: font size 100%',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when font-size is set to 100%.',
	],
	'shaping-008.html': [
	'shaping: font size 120%',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes to font-size.',
	],
	'shaping-009.html': [
	'shaping: margin > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when marginis set to a non-zero value.',
	],
	'shaping-010.html': [
	'shaping: padding > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when padding is set to a non-zero value.',
	],
	'shaping-011.html': [
	'shaping: border > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when border is set to a non-zero value.',
	],
	'shaping-012.html': [
	'shaping: isolation',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when isolation occurs.',
	],
	'shaping_lig-000.html': [
	'shaping: span',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries with no styling change.',
	],
	'shaping_lig-001.html': [
	'shaping: colour',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes to colour.',
	],
	'shaping_lig-002.html': [
	'shaping: font-weight',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes in font weight.',
	],
	'shaping_lig-003.html': [
	'shaping: font-style',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes in font style.',
	],
	'shaping_lig-004.html': [
	'shaping: margin 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when margin is set to 0.',
	],
	'shaping_lig-005.html': [
	'shaping: padding 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when padding is set to 0.',
	],
	'shaping_lig-006.html': [
	'shaping: border 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when border is set to 0.',
	],
	'shaping_lig-007.html': [
	'shaping: font size 100%',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries when font-size is set to 100%.',
	],
	'shaping_lig-008.html': [
	'shaping: font size 120%',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken across inline box boundaries for changes to font-size.',
	],
	'shaping_lig-009.html': [
	'shaping: margin > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when marginis set to a non-zero value.',
	],
	'shaping_lig-010.html': [
	'shaping: padding > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when padding is set to a non-zero value.',
	],
	'shaping_lig-011.html': [
	'shaping: border > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when border is set to a non-zero value.',
	],
	'shaping_lig-012.html': [
	'shaping: isolation',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken across inline box boundaries when isolation occurs.',
	],
	'shaping_cchar-000.html': [
	'shaping: span',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken by a span with no styling change for an intervening diacritic.',
	],
	'shaping_cchar-001.html': [
	'shaping: colour',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken for changes to colour for an intervening diacritic.',
	],
	'shaping_cchar-002.html': [
	'shaping: font-weight',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken for changes in font weight for an intervening diacritic.',
	],
	'shaping_cchar-003.html': [
	'shaping: font-style',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken for changes in font style for an intervening diacritic.',
	],
	'shaping_cchar-004.html': [
	'shaping: margin 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken when margin is set to 0 for an intervening diacritic.',
	],
	'shaping_cchar-005.html': [
	'shaping: padding 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken when padding is set to 0 for an intervening diacritic.',
	],
	'shaping_cchar-006.html': [
	'shaping: border 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken when border is set to 0 for an intervening diacritic.',
	],
	'shaping_cchar-007.html': [
	'shaping: font size 100%',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken when font-size is set to 100% for an intervening diacritic.',
	],
	'shaping_cchar-008.html': [
	'shaping: font size 120%',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping should not be broken when font-size is changed for an intervening diacritic.',
	],
	'shaping_cchar-009.html': [
	'shaping: margin > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken when margin is set to a non-zero value on an intervening diacritic.',
	],
	'shaping_cchar-010.html': [
	'shaping: padding > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken when padding is set to a non-zero value on an intervening diacritic.',
	],
	'shaping_cchar-011.html': [
	'shaping: border > 0',
	'https://drafts.csswg.org/css-text/#boundary-shaping',
	'Shaping SHOULD be broken when border is set to a non-zero value on an intervening diacritic.',
	],
}