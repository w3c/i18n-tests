var tests = {
	'bidi-embed-001.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi embed (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:embed are applied to an inline element containing mixed direction text, the text in that element will be displayed in rtl order.',
	],
	'bidi-embed-002.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi embed (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:embed are applied to an inline element containing mixed direction text, the text in that element will be displayed in rtl order.',
	],
	'bidi-embed-003.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi embed (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:embed are applied to an inline element containing mixed direction text, the text in that element will be displayed in ltr order.',
	],
	'bidi-embed-004.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi embed (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:embed are applied to an inline element containing mixed direction text, the text in that element will be displayed in ltr order.',
	],
	'bidi-embed-005.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi embed, rtl',
	'',
	'If unicode-bidi:embed is applied to an inline element, that element will interact with the surrounding text like a strongly directional character.',
	],
	'bidi-embed-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi embed, ltr',
	'',
	'If unicode-bidi:embed is applied to an inline element, that element will interact with the surrounding text like a strongly directional character.',
	],
	'bidi-embed-007.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi embed, rtl + number',
	'',
	'If unicode-bidi:embed is applied to an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-embed-008.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi embed, ltr + number',
	'',
	'If unicode-bidi:embed is applied to an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-embed-009.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi embed, rtl list',
	'',
	'If unicode-bidi:embed is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-embed-010.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi embed, ltr list',
	'',
	'If unicode-bidi:embed is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-embed-011.html': [
	'direction/unicode-bidi: direction alone and inherited, unicode-bidi embed',
	'',
	'Directionality is not changed by the direction property on its own, but unicode-bidi: embed will apply direction declared on a higher level element.',
	],
	'bidi-isolate-001.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi isolate (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in rtl order.',
	],
	'bidi-isolate-002.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi isolate (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in rtl order.',
	],
	'bidi-isolate-003.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi isolate (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in ltr order.',
	],
	'bidi-isolate-004.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi isolate (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in ltr order.',
	],
	'bidi-isolate-005.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi isolate, rtl',
	'',
	'If unicode-bidi:isolate is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-isolate-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi isolate, ltr',
	'',
	'If unicode-bidi:isolate is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-isolate-007.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, rtl + number',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-isolate-008.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, ltr + number',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-isolate-009.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, rtl list',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-isolate-010.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, ltr list',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-isolate-011.html': [
	'direction/unicode-bidi: direction alone and inherited, unicode-bidi embed',
	'',
	'Directionality is not changed by the direction property on its own, but unicode-bidi: isolate will apply direction declared on a higher level element.',
	],
	'bidi-isolate-override-001.html': [
	'direction/unicode-bidi: span direction rtl, isolate-override (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in rtl order, ignoring the bidi algorithm.',
	],
	'bidi-isolate-override-002.html': [
	'direction/unicode-bidi: span direction rtl, isolate-override (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in rtl order, ignoring the bidi algorithm.',
	],
	'bidi-isolate-override-003.html': [
	'direction/unicode-bidi: span direction ltr, isolate-override (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in ltr order, ignoring the bidi algorithm.',
	],
	'bidi-isolate-override-004.html': [
	'direction/unicode-bidi: span direction ltr, isolate-override (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in ltr order, ignoring the bidi algorithm.',
	],
	'bidi-isolate-override-005.html': [
	'direction/unicode-bidi: element as directional character with isolate-override, rtl',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-isolate-override-006.html': [
	'direction/unicode-bidi: element as directional character with isolate-override, ltr',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-isolate-override-007.html': [
	'direction/unicode-bidi: element isolation and isolate-override, rtl + number',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-isolate-override-008.html': [
	'direction/unicode-bidi: element isolation and isolate-override, ltr + number',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-isolate-override-009.html': [
	'direction/unicode-bidi: element isolation and isolate-override, rtl list',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-isolate-override-010.html': [
	'direction/unicode-bidi: element isolation and isolate-override, ltr list',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-isolate-override-011.html': [
	'direction/unicode-bidi: direction alone and inherited, isolate-override',
	'',
	'unicode-bidi: isolate-override will apply direction declared on a higher level element.',
	],
	'bidi-isolate-override-012.html': [
	'direction/unicode-bidi: default direction, isolate-override',
	'',
	'unicode-bidi: When no direction is set, isolate-override will apply ltr ordering to text within its scope.',
	],
	'bidi-normal-001.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi normal (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:normal are applied to an inline element containing mixed direction text, the text in that element will NOT be displayed in rtl order.',
	],
	'bidi-normal-002.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi normal (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:normal are applied to an inline element containing mixed direction text, the text in that element will NOT be displayed in rtl order.',
	],
	'bidi-normal-003.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi normal (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:normal are applied to an inline element containing mixed direction text, the text in that element will NOT be displayed in ltr order.',
	],
	'bidi-normal-004.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi normal (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:normal are applied to an inline element containing mixed direction text, the text in that element will NOT be displayed in ltr order.',
	],
	'bidi-normal-005.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi normal, rtl',
	'',
	'If unicode-bidi:normal is applied to an inline element, that element will NOT interact with the surrounding text like a strong or neutral directional character.',
	],
	'bidi-normal-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi normal, ltr',
	'',
	'If unicode-bidi:normal is applied to an inline element, that element will NOT interact with the surrounding text like a strong or neutral directional character.',
	],
	'bidi-normal-007.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi normal, rtl + number',
	'',
	'If unicode-bidi:normal is applied to an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-normal-008.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi normal, ltr + number',
	'',
	'If unicode-bidi:normal is applied to an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-normal-009.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi normal, rtl list',
	'',
	'If unicode-bidi:normal is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-normal-010.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi normal, ltr list',
	'',
	'If unicode-bidi:normal is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-normal-011.html': [
	'direction/unicode-bidi: direction alone and inherited, unicode-bidi normal',
	'',
	'Directionality is not changed by the direction property on its own, nor by unicode-bidi:normal set on a lower level element.',
	],
	'bidi-override-001.html': [
	'direction/unicode-bidi: span direction rtl, bidi-override (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:bidi-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in rtl order, ignoring the bidi algorithm.',
	],
	'bidi-override-002.html': [
	'direction/unicode-bidi: span direction rtl, bidi-override (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:bidi-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in rtl order, ignoring the bidi algorithm.',
	],
	'bidi-override-003.html': [
	'direction/unicode-bidi: span direction ltr, bidi-override (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:bidi-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in ltr order, ignoring the bidi algorithm.',
	],
	'bidi-override-004.html': [
	'direction/unicode-bidi: span direction ltr, bidi-override (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:bidi-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in ltr order, ignoring the bidi algorithm.',
	],
	'bidi-override-005.html': [
	'direction/unicode-bidi: element as directional character with bidi-override, rtl',
	'',
	'If unicode-bidi:bidi-override is applied to an inline element, that element will interact with the surrounding text like a strongly directional character.',
	],
	'bidi-override-006.html': [
	'direction/unicode-bidi: element as directional character with bidi-override, ltr',
	'',
	'If unicode-bidi:bidi-override is applied to an inline element, that element will interact with the surrounding text like a strongly directional character.',
	],
	'bidi-override-007.html': [
	'direction/unicode-bidi: element isolation and bidi-override, rtl + number',
	'',
	'If unicode-bidi:bidi-override is applied to an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-override-008.html': [
	'direction/unicode-bidi: element isolation and bidi-override, ltr + number',
	'',
	'If unicode-bidi:bidi-override is applied to an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-override-009.html': [
	'direction/unicode-bidi: element isolation and bidi-override, rtl list',
	'',
	'If unicode-bidi:bidi-override is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-override-010.html': [
	'direction/unicode-bidi: element isolation and bidi-override, ltr list',
	'',
	'If unicode-bidi:bidi-override is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-override-011.html': [
	'direction/unicode-bidi: direction alone and inherited, bidi-override',
	'',
	'unicode-bidi: bidi-override will apply direction declared on a higher level element.',
	],
	'bidi-override-012.html': [
	'direction/unicode-bidi: default direction, bidi-override',
	'',
	'unicode-bidi: When no direction is set, bidi-override will apply ltr ordering to text within its scope.',
	],
	'bidi-plaintext-001.html': [
	'unicode-bidi: span unicode-bidi plaintext, rtl (1)',
	'',
	'If unicode-bidi:plaintext is applied to an inline element containing mixed direction text with a first strong directional character that is rtl, the text in that element will be displayed in rtl order.',
	],
	'bidi-plaintext-003.html': [
	'unicode-bidi: span unicode-bidi plaintext, ltr (1)',
	'',
	'If unicode-bidi:plaintext is applied to an inline element containing mixed direction text with a first strong directional character that is ltr, the text in that element will be displayed in ltr order.',
	],
	'bidi-plaintext-005.html': [
	'unicode-bidi: element as directional character with unicode-bidi plaintext, rtl',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-plaintext-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi plaintext, ltr',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-plaintext-007.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, rtl + number',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-plaintext-008.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, ltr + number',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-plaintext-009.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, rtl list',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-plaintext-010.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, ltr list',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-plaintext-011.html': [
	'direction/unicode-bidi: span unicode-bidi plaintext, no strong (1)',
	'',
	'If unicode-bidi:plaintext is applied to an inline element containing mixed direction text with no strong directional character, the text in that element will be displayed in ltr order.',
	],
	'bidi-table-001.html': [
	'direction: table columns',
	'',
	'If direction is applied to the ancestor of a table element, columns will be displayed in that direction.',
	],
	'bidi-unset-001.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi unset (1)',
	'',
	'In a ltr context, if direction:rtl is set but unicode-bidi is not set on an inline element containing mixed direction text, the text in that element will NOT be displayed in rtl order.',
	],
	'bidi-unset-002.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi unset (2)',
	'',
	'In a ltr context, if direction:rtl is set but unicode-bidi is not set on an inline element containing mixed direction text, the text in that element will NOT be displayed in rtl order.',
	],
	'bidi-unset-003.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi unset (1)',
	'',
	'In a rtl context, if direction:ltr is set but unicode-bidi is not set on an inline element containing mixed direction text, the text in that element will NOT be displayed in ltr order.',
	],
	'bidi-unset-004.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi unset (2)',
	'',
	'In a rtl context, if direction:ltr is set but unicode-bidi is not set on an inline element containing mixed direction text, the text in that element will NOT be displayed in ltr order.',
	],
	'bidi-unset-005.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi unset, rtl',
	'',
	'If direction is set but unicode-bidi is not set on an inline element, that element will NOT interact with the surrounding text like a strong or neutral directional character.',
	],
	'bidi-unset-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi unset, ltr',
	'',
	'If direction is set but unicode-bidi is not set on an inline element, that element will NOT interact with the surrounding text like a strong or neutral directional character.',
	],
	'bidi-unset-007.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi unset, rtl + number',
	'',
	'If direction is set but unicode-bidi is not set on an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-unset-008.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi unset, ltr + number',
	'',
	'If direction is set but unicode-bidi is not set on an inline element, the text in that element will NOT be directionally isolated from surrounding text.',
	],
	'bidi-unset-009.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi unset, rtl list',
	'',
	'If direction is set but unicode-bidi is not set on an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-unset-010.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi unset, ltr list',
	'',
	'If direction is set but unicode-bidi is not set on an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'block-embed-001.html': [
	'direction: div direction rtl',
	'',
	'If direction is applied to a block element containing mixed direction text, the text in that element will be displayed in the expected order.',
	],
	'block-embed-002.html': [
	'direction: div direction ltr',
	'',
	'If direction is applied to a block element containing mixed direction text, the text in that element will be displayed in the expected order.',
	],
	'block-embed-003.html': [
	'direction: div direction rtl',
	'',
	'If direction is applied to a block element, contained block elements inherit that direction.',
	],
	'block-override-001.html': [
	'direction: div override rtl',
	'',
	'If unicode-bidi:bidi-override is applied to a block element, characters are displayed strictly in sequence according to the direction property.',
	],
	'block-override-002.html': [
	'direction: div override ltr',
	'',
	'If unicode-bidi:bidi-override is applied to a block element, characters are displayed strictly in sequence according to the direction property.',
	],
	'block-override-003.html': [
	'direction: div direction ltr',
	'',
	'If unicode-bidi:bidi-override is applied to a block element with no direction value set, characters are displayed strictly in sequence, in ltr order.',
	],
	'block-override-004.html': [
	'unicode-bidi: div override inheritance',
	'',
	'If unicode-bidi:bidi-override is applied to a block element, all characters in immediate inline text are displayed strictly in sequence according to the direction property, but content of contained blocks is not.',
	],
	'block-override-isolate-001.html': [
	'direction: div override rtl',
	'',
	'If unicode-bidi:isolate-override is applied to a block element, characters are displayed strictly in sequence according to the direction property.',
	],
	'block-override-isolate-002.html': [
	'direction: div override ltr',
	'',
	'If unicode-bidi:isolate-override is applied to a block element, characters are displayed strictly in sequence according to the direction property.',
	],
	'block-override-isolate-003.html': [
	'direction: div direction ltr',
	'',
	'If unicode-bidi:isolate-override is applied to a block element with no direction value set, characters are displayed strictly in sequence, in ltr order.',
	],
	'block-override-isolate-004.html': [
	'unicode-bidi: div override inheritance',
	'',
	'If unicode-bidi:isolate-override is applied to a block element, all characters in immediate inline text are displayed strictly in sequence according to the direction property, but content of contained blocks is not.',
	],
	'block-plaintext-001.html': [
	'unicode-bidi: div plaintext, rtl',
	'',
	'If unicode-bidi: plaintext is applied to a div element containing mixed direction text, the order of directional runs in the text in that element will be determined by its first strong character.',
	],
	'block-plaintext-002.html': [
	'unicode-bidi: div plaintext, ltr',
	'',
	'If unicode-bidi: plaintext is applied to a div element containing mixed direction text, the order of directional runs in the text in that element will be determined by its first strong character.',
	],
	'block-plaintext-003.html': [
	'unicode-bidi: div plaintext inheritance',
	'',
	'If unicode-bidi:plaintext is applied to a block element, directional runs are displayed according to the first strong character, but content of contained blocks is not.',
	],
	'block-plaintext-004.html': [
	'unicode-bidi: div plaintext with br',
	'',
	'If unicode-bidi:plaintext is applied to a div element containing br tags, each line of characters that starts after br is displayed according to the first strong character after the br.',
	],
	'block-plaintext-005.html': [
	'unicode-bidi: textarea plaintext',
	'',
	'If unicode-bidi:plaintext is applied to a textarea element, each line of characters after a linebreak is displayed according to the first strong character after the linebreak.',
	],
	'block-plaintext-006.html': [
	'unicode-bidi: pre plaintext',
	'',
	'If unicode-bidi:plaintext is applied to a pre element, each line of characters after a linebreak is displayed according to the first strong character after the linebreak.',
	],
	'bidi-prefixed/bidi-isolate-pfx-001.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi isolate (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in rtl order.',
	],
	'bidi-prefixed/bidi-isolate-pfx-002.html': [
	'direction/unicode-bidi: span direction rtl, unicode-bidi isolate (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in rtl order.',
	],
	'bidi-prefixed/bidi-isolate-pfx-003.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi isolate (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in ltr order.',
	],
	'bidi-prefixed/bidi-isolate-pfx-004.html': [
	'direction/unicode-bidi: span direction ltr, unicode-bidi isolate (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate are applied to an inline element containing mixed direction text, the text in that element will be displayed in ltr order.',
	],
	'bidi-prefixed/bidi-isolate-pfx-005.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi isolate, rtl',
	'',
	'If unicode-bidi:isolate is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-prefixed/bidi-isolate-pfx-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi isolate, ltr',
	'',
	'If unicode-bidi:isolate is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-prefixed/bidi-isolate-pfx-007.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, rtl + number',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-prefixed/bidi-isolate-pfx-008.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, ltr + number',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-prefixed/bidi-isolate-pfx-009.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, rtl list',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-prefixed/bidi-isolate-pfx-010.html': [
	'direction/unicode-bidi: element isolation and unicode-bidi isolate, ltr list',
	'',
	'If unicode-bidi:isolate is applied to an inline element, the text in that element will NOT be directionally isolated from following content.',
	],
	'bidi-prefixed/bidi-isolate-pfx-011.html': [
	'direction/unicode-bidi: direction alone and inherited, unicode-bidi embed',
	'',
	'Directionality is not changed by the direction property on its own, but unicode-bidi: isolate will apply direction declared on a higher level element.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-001.html': [
	'direction/unicode-bidi: span direction rtl, isolate-override (1)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in rtl order, ignoring the bidi algorithm.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-002.html': [
	'direction/unicode-bidi: span direction rtl, isolate-override (2)',
	'',
	'In a ltr context, if direction:rtl and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in rtl order, ignoring the bidi algorithm.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-003.html': [
	'direction/unicode-bidi: span direction ltr, isolate-override (1)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in ltr order, ignoring the bidi algorithm.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-004.html': [
	'direction/unicode-bidi: span direction ltr, isolate-override (2)',
	'',
	'In a rtl context, if direction:ltr and unicode-bidi:isolate-override are applied to an inline element containing mixed direction text, the characters in that element will all be displayed in ltr order, ignoring the bidi algorithm.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-005.html': [
	'direction/unicode-bidi: element as directional character with isolate-override, rtl',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-006.html': [
	'direction/unicode-bidi: element as directional character with isolate-override, ltr',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-007.html': [
	'direction/unicode-bidi: element isolation and isolate-override, rtl + number',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-008.html': [
	'direction/unicode-bidi: element isolation and isolate-override, ltr + number',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-009.html': [
	'direction/unicode-bidi: element isolation and isolate-override, rtl list',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-010.html': [
	'direction/unicode-bidi: element isolation and isolate-override, ltr list',
	'',
	'If unicode-bidi:isolate-override is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-011.html': [
	'direction/unicode-bidi: direction alone and inherited, isolate-override',
	'',
	'unicode-bidi: isolate-override will apply direction declared on a higher level element.',
	],
	'bidi-prefixed/bidi-isolate-override-pfx-012.html': [
	'direction/unicode-bidi: default direction, isolate-override',
	'',
	'unicode-bidi: When no direction is set, isolate-override will apply ltr ordering to text within its scope.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-001.html': [
	'unicode-bidi: span unicode-bidi plaintext, rtl (1)',
	'',
	'If unicode-bidi:plaintext is applied to an inline element containing mixed direction text with a first strong directional character that is rtl, the text in that element will be displayed in rtl order.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-003.html': [
	'unicode-bidi: span unicode-bidi plaintext, ltr (1)',
	'',
	'If unicode-bidi:plaintext is applied to an inline element containing mixed direction text with a first strong directional character that is ltr, the text in that element will be displayed in ltr order.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-005.html': [
	'unicode-bidi: element as directional character with unicode-bidi plaintext, rtl',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-006.html': [
	'direction/unicode-bidi: element as directional character with unicode-bidi plaintext, ltr',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, that element will interact with the surrounding text like a neutral directional character.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-007.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, rtl + number',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-008.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, ltr + number',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from surrounding text.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-009.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, rtl list',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-010.html': [
	'unicode-bidi: element isolation and unicode-bidi plaintext, ltr list',
	'',
	'If unicode-bidi:plaintext is applied to an inline element, the text in that element WILL be directionally isolated from following content.',
	],
	'bidi-prefixed/bidi-plaintext-pfx-011.html': [
	'direction/unicode-bidi: span unicode-bidi plaintext, no strong (1)',
	'',
	'If unicode-bidi:plaintext is applied to an inline element containing mixed direction text with no strong directional character, the text in that element will be displayed in ltr order.',
	],
	'bidi-prefixed/block-override-isolate-pfx-001.html': [
	'direction: div override rtl',
	'',
	'If unicode-bidi:isolate-override is applied to a block element, characters are displayed strictly in sequence according to the direction property.',
	],
	'bidi-prefixed/block-override-isolate-pfx-002.html': [
	'direction: div override ltr',
	'',
	'If unicode-bidi:isolate-override is applied to a block element, characters are displayed strictly in sequence according to the direction property.',
	],
	'bidi-prefixed/block-override-isolate-pfx-003.html': [
	'direction: div direction ltr',
	'',
	'If unicode-bidi:isolate-override is applied to a block element with no direction value set, characters are displayed strictly in sequence, in ltr order.',
	],
	'bidi-prefixed/block-override-isolate-pfx-004.html': [
	'unicode-bidi: div override inheritance',
	'',
	'If unicode-bidi:isolate-override is applied to a block element, all characters in immediate inline text are displayed strictly in sequence according to the direction property, but content of contained blocks is not.',
	],
	'bidi-prefixed/block-plaintext-pfx-001.html': [
	'unicode-bidi: div plaintext, rtl',
	'',
	'If unicode-bidi: plaintext is applied to a div element containing mixed direction text, the order of directional runs in the text in that element will be determined by its first strong character.',
	],
	'bidi-prefixed/block-plaintext-pfx-002.html': [
	'unicode-bidi: div plaintext, ltr',
	'',
	'If unicode-bidi: plaintext is applied to a div element containing mixed direction text, the order of directional runs in the text in that element will be determined by its first strong character.',
	],
	'bidi-prefixed/block-plaintext-pfx-003.html': [
	'unicode-bidi: div plaintext inheritance',
	'',
	'If unicode-bidi:plaintext is applied to a block element, directional runs are displayed according to the first strong character, but content of contained blocks is not.',
	],
	'bidi-prefixed/block-plaintext-pfx-004.html': [
	'unicode-bidi: div plaintext with br',
	'',
	'If unicode-bidi:plaintext is applied to a div element containing br tags, each line of characters that starts after br is displayed according to the first strong character after the br.',
	],
	'bidi-prefixed/block-plaintext-pfx-005.html': [
	'unicode-bidi: textarea plaintext',
	'',
	'If unicode-bidi:plaintext is applied to a textarea element, each line of characters after a linebreak is displayed according to the first strong character after the linebreak.',
	],
	'bidi-prefixed/block-plaintext-pfx-006.html': [
	'unicode-bidi: pre plaintext',
	'',
	'If unicode-bidi:plaintext is applied to a pre element, each line of characters after a linebreak is displayed according to the first strong character after the linebreak.',
	],
}