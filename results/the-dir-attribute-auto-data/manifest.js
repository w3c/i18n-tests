var tests = {
	'the-dir-attribute-001.html': [
	'The dir attribute: dir=rtl basic test',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If the element\'s dir attribute is in the rtl state, the directionality of the element is rtl.',
	],
	'the-dir-attribute-002.html': [
	'The dir attribute: dir=ltr basic test',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If the element\'s dir attribute is in the ltr state, the directionality of the element is ltr.',
	],
	'the-dir-attribute-003.html': [
	'The dir attribute: ltr context, rtl table',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'[Exploratory] When dir=\'rtl\' is added to a table in a ltr context, (a) directional runs in a table are ordered right-to-left, (b) columns run right-to-left, (c) text is right-aligned within cells, and (d) the table is left-aligned on the page.',
	],
	'the-dir-attribute-004.html': [
	'The dir attribute: rtl context, ltr table',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'[Exploratory] When dir=\'ltr\' is added to a table in a rtl context, (a) directional runs in the table are ordered left-to-right, (b) columns run left-to-right, (c) text is left-aligned within cells, and (d) the table is right-aligned on the page.',
	],
	'the-dir-attribute-005.html': [
	'The dir attribute: ordered and unordered lists',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'[Exploratory] In a rtl context, all list items should start from the right, regardless of the direction of the script in the list item.',
	],
	'the-dir-attribute-006.html': [
	'The dir attribute: dl lists',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'[Exploratory] In a rtl context, all list items should start from the right, regardless of the direction of the script in the list item.',
	],
	'the-dir-attribute-007.html': [
	'The dir attribute: inheritance',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If an element has no dir attribute, but has a parent element, the directionality of the element is the same as the parent element\'s directionality.',
	],
	'the-dir-attribute-008.html': [
	'The dir attribute: invalid value and inheritance',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If an element has a dir attribute with an invalid value (\'foo\' or \'bar\'), and has a parent element, the directionality of the element is the same as the parent element\'s directionality.',
	],
	'the-dir-attribute-009.html': [
	'The dir attribute: invalid values left and right',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If an element has a dir attribute with an invalid value (\'left\' or \'right\' or \'rl\' or \'lr\'), and has a parent element, the directionality of the element is the same as the parent element\'s directionality.',
	],
	'the-dir-attribute-010.html': [
	'The dir attribute: default direction, basic test',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If the root element has no dir attribute, the directionality of an element is \'ltr\'.',
	],
	'the-dir-attribute-011.html': [
	'The dir attribute: default direction, invalid value \'right\'',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If the root element has an invalid dir attribute (\'right\'), the directionality of an element is \'ltr\'.',
	],
	'the-dir-attribute-012.html': [
	'The dir attribute: default direction, invalid value \'rl\'',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'If the root element has an invalid dir attribute (\'rl\'), the directionality of an element is \'ltr\'.',
	],
	'the-dir-attribute-046.html': [
	'The dir attribute: dir=auto, inline auto direction',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character of the text. dir=auto is applied to an inline element here, in various base direction contexts.',
	],
	'the-dir-attribute-047.html': [
	'The dir attribute: dir=auto, inline isolation',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'dir=\'auto\' on an inline element will directionally isolate its contents from a following number.',
	],
	'the-dir-attribute-048.html': [
	'The dir attribute: dir=auto, start with L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-049.html': [
	'The dir attribute: dir=auto, start with R/AL',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character of the text. In this test, it is the Hebrew or Arabic letter Alef, thus the direction must be resolved as RTL.',
	],
	'the-dir-attribute-050.html': [
	'The dir attribute: dir=auto, isolated in LTR text',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text, but the element behaves externally as a neutral character.       In this test, it allows a preceding R to form a single directional run       with a succeeding number.',
	],
	'the-dir-attribute-051.html': [
	'The dir attribute: dir=auto, start with bdi, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text while ignoring bdi elements.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-052.html': [
	'The dir attribute: dir=auto, start with bdi, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of the text while ignoring bdi elements.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-053.html': [
	'The dir attribute: dir=auto, start with dir=auto, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text while ignoring contained elements with an explicit dir of their own.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-054.html': [
	'The dir attribute: dir=auto, start with dir=auto, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of the text while ignoring contained elements with an explicit dir of their own.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-055.html': [
	'The dir attribute: dir=auto, start with dir, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of the text while ignoring contained elements with an explicit dir of their own.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-056.html': [
	'The dir attribute: dir=auto, start with dir, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text while ignoring contained elements with an explicit dir of their own.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-057.html': [
	'The dir attribute: dir=auto, start with L within contained element',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of the text, including text within contained elements.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-058.html': [
	'The dir attribute: dir=auto, start with R within contained element',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text, including text within contained elements.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-059.html': [
	'The dir attribute: dir=auto, start with script, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of descendant text while ignoring descendant script elements.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-060.html': [
	'The dir attribute: dir=auto, start with script, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of descendant text while ignoring descendant script elements.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-061.html': [
	'The dir attribute: dir=auto, start with style, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of descendant text while ignoring descendant style elements.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-062.html': [
	'The dir attribute: dir=auto, start with style, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'When dir=\'auto\', the direction is set according to the first strong character       of descendant text while ignoring descendant style elements.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-063.html': [
	'The dir attribute: dir=auto, start with textarea, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of descendant text while ignoring descendant textarea elements.       In this test, it is the Latin letter A, thus the direction must be       resolved as LTR.',
	],
	'the-dir-attribute-064.html': [
	'The dir attribute: dir=auto, start with textarea, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of descendant text while ignoring descendant textarea elements.       In this test, it is the Hebrew letter Alef, thus the direction must be       resolved as RTL.',
	],
	'the-dir-attribute-065.html': [
	'The dir attribute: dir=auto, start with EN, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Latin letter A since digits are not strongly       directional, thus the direction must be resolved as LTR.',
	],
	'the-dir-attribute-066.html': [
	'The dir attribute: dir=auto, start with EN, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Hebrew letter Alef since digits are not strongly       directional, thus the direction must be resolved as RTL.',
	],
	'the-dir-attribute-067.html': [
	'The dir attribute: dir=auto, start with N, then EN, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Latin letter A since neutrals and digits are not       strongly directional, thus the direction must be resolved as LTR.',
	],
	'the-dir-attribute-068.html': [
	'The dir attribute: dir=auto, start with N, then EN, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Hebrew letter Alef since neutrals and digits are not       strongly directional, thus the direction must be resolved as RTL.',
	],
	'the-dir-attribute-069.html': [
	'The dir attribute: dir=auto, start with N, then EN, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text, ignoring neutrals and numbers.       If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'the-dir-attribute-070.html': [
	'The dir attribute: dir=auto, start with N, then L',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Latin letter A since neutrals are not       strongly directional, thus the direction must be resolved as LTR.',
	],
	'the-dir-attribute-071.html': [
	'The dir attribute: dir=auto, start with N, then R',
	'https://html.spec.whatwg.org/multipage/dom.html#the-dir-attribute',
	'       When dir=\'auto\', the direction is set according to the first strong character       of the text.       In this test, it is the Hebrew letter Alef since neutrals are not       strongly directional, thus the direction must be resolved as RTL.',
	],
}
