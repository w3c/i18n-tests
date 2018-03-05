var tests = {
	'bidi-rendering-input-020.html': [
	'Bidi rendering: input with dir=auto, start with L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element of type text is set according to the first strong character of its value. In this test, the first strong character is the Latin letter A, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-021.html': [
	'Bidi rendering: input with dir=auto, start with R/AL',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'en dir=auto, the direction of an input element is set according to the first strong character of its value. In this test, it is the Hebrew or Arabic letter Alef, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-022.html': [
	'Bidi rendering: input with dir=auto, various types of input starting with L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element of type search, telephone, url, or email is set as LTR when the first strong character of its value is of type L (here the Latin letter A).',
	],
	'bidi-rendering-input-023.html': [
	'Bidi rendering: input with dir=auto, various types of input starting with R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element of type search, telephone, url, or email is set as RTL when the first strong character of its value is of type R (here the Hebrew letter aleph).',
	],
	'bidi-rendering-input-023a.html': [
	'Bidi rendering: input with dir=auto, various types of input starting with AL',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element of type search, telephone, url, or email is set as RTL when the first strong character of its value is of type AL (here the Arabic letter alef).',
	],
	'bidi-rendering-input-030.html': [
	'Bidi rendering: input with dir=auto, start with EN+L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A since digits are not strongly directional, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-031.html': [
	'Bidi rendering: input with dir=auto, start with EN+R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef since digits are not strongly directional, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-032.html': [
	'Bidi rendering: input with dir=auto, start with N+EN+L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A since neutrals and digits are not       strongly directional, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-033.html': [
	'Bidi rendering: input with dir=auto, start with N+EN+R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef since neutrals and digits are not       strongly directional, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-034.html': [
	'Bidi rendering: input with dir=auto, all N+EN',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value, or to LTR if there is no such       character.       In this test, there is no strongly directional character in the value,       thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-035.html': [
	'Bidi rendering: input with dir=auto, start with N+L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A since neutrals are not strongly directional, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-036.html': [
	'Bidi rendering: input with dir=auto, start with N+R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef since neutrals are not strongly directional, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-037.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with EN+L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A since digits are not strongly directional, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-038.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with EN+R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef since digits are not strongly directional, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-039.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-040.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with N+EN+L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A since neutrals and digits are not strongly directional, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-041.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with N+EN+R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef since neutrals and digits are not strongly directional, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-042.html': [
	'Bidi rendering: input with dir=auto, script assigns to all N+EN',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value, or to LTR if there is no such       character.       In this test, there is no strongly directional character in the value,       thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-043.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with N+L',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Latin letter A since neutrals are not strongly directional, thus the direction must be resolved as LTR.',
	],
	'bidi-rendering-input-044.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with N+R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef since neutrals are not strongly directional, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-input-045.html': [
	'Bidi rendering: input with dir=auto, script assigns to start with R',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction of an input element is set according to       the first strong character of its value.       In this test, it is the Hebrew letter Alef, thus the direction must be resolved as RTL.',
	],
	'bidi-rendering-pre-110.html': [
	'Bidi rendering: dir=auto, pre, paragraph by paragraph',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction is set according to the first strong character of the text. For pre elements, the heuristic is applied on a per-paragraph level.',
	],
	'bidi-rendering-pre-111.html': [
	'Bidi rendering: pre with dir=auto, mixed L and R paragraphs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction is set according to the first strong character of the text. For textarea and pre elements, the heuristic is applied on a per-paragraph level.',
	],
	'bidi-rendering-pre-112.html': [
	'Bidi rendering: pre with dir=auto, all N+EN',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'       When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level.       If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'bidi-rendering-pre-114.html': [
	'Bidi rendering: pre with dir=auto, all-N between all-Rs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level.       If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'bidi-rendering-pre-115.html': [
	'Bidi rendering: newline in pre separates bidi paragraphs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'A newline in a pre element should separate paragraphs for the purposes of the Unicode bidirectional algorithm.',
	],
	'bidi-rendering-textarea-100.html': [
	'Bidi rendering: dir=auto, textarea, paragraph by paragraph',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'[Exploratory] When dir=auto, the direction is set according to the first strong character of the text. For textarea elements, the heuristic is applied on a per-paragraph level. The alignment of the line will vary with the direction.',
	],
	'bidi-rendering-textarea-101.html': [
	'Bidi rendering: textarea with dir=auto, mixed L and R paragraphs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction is set according to the first strong character of the text. For textarea and pre elements, the heuristic is applied on a per-paragraph level.',
	],
	'bidi-rendering-textarea-102.html': [
	'Bidi rendering: textarea with dir=auto, all N+EN',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level. If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'bidi-rendering-textarea-103.html': [
	'Bidi rendering: textarea with dir=auto, script assigns to mixed L and R paragraphs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'       When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level.',
	],
	'bidi-rendering-textarea-104.html': [
	'Bidi rendering: textarea with dir=auto, script assigns to all N+EN',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level.       If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'bidi-rendering-textarea-105.html': [
	'Bidi rendering: textarea with dir=auto, all-N between all-Rs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'       When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level.       If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'bidi-rendering-textarea-106.html': [
	'Bidi rendering: textarea with dir=auto, script assigns to all-N between all-Rs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'       When dir=auto, the direction is set according to the first strong character       of the text.       For textarea and pre elements, the heuristic is applied on a per-paragraph level.       If there is no strong character, as in this test, the direction defaults to LTR.',
	],
	'bidi-rendering-textarea-107.html': [
	'Bidi rendering: newline in textarea separates bidi paragraphs',
	'http://www.w3.org/TR/html5/rendering.html#bidi-rendering',
	'A newline in a textarea element, and in its raw value, should separate paragraphs for the purposes of the Unicode bidirectional algorithm.',
	],
	'bidi-rendering-br-001.html': [
	'The br element: BR separates bidi paragraph',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element',
	'A br element should separate paragraphs for the purposes of the Unicode bidirectional algorithm.',
	],
	'bidi-rendering-br-002.html': [
	'The br element: BR in inline ancestors',
	'http://www.w3.org/TR/html5/text-level-semantics.html#the-br-element',
	'A br element should separate paragraphs for the purposes of the Unicode bidirectional algorithm. If an inline element is broken around a bidi paragraph boundary (e.g. if split by a block or forced paragraph break), then the bidi control codes corresponding to the end of the element are added before the interruption and the codes corresponding to the start of the element are added after it. (In other words, any embedding levels or overrides started by the element are closed at the paragraph break and reopened on the other side of it.)',
	],
}
