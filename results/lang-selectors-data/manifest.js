var tests = {
	'pseudo-classes/css3-selectors-lang-001.html': [
	'CSS3 Selectors: :lang(es), lang="es"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value that matches an identical lang attribute value on the same element will produce styling.',
	],
	'pseudo-classes/css3-selectors-lang-002.html': [
	'CSS3 Selectors: :lang(es), lang="es" on parent',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value that matches an identical lang attribute value on a parent element will produce styling.',
	],
	'pseudo-classes/css3-selectors-lang-004.html': [
	'CSS3 Selectors: :lang(es), lang="ES"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value will match a lang attribute value regardless of case differences.',
	],
	'pseudo-classes/css3-selectors-lang-005.html': [
	'CSS3 Selectors: :lang(es), lang="es-MX"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value will match a lang attribute value when the latter contains additional subtags.',
	],
	'pseudo-classes/css3-selectors-lang-006.html': [
	'CSS3 Selectors: :lang(es-MX), lang="es"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value will NOT match a lang attribute value when the former contains more subtags.',
	],
	'pseudo-classes/css3-selectors-lang-007.html': [
	'CSS3 Selectors: :lang(es), lang="mx-es"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'When the :lang value uses a single subtag, it will NOT match against an attribute value where it appears in a different position.',
	],
	'pseudo-classes/css3-selectors-lang-008.html': [
	'CSS3 Selectors: :lang(en-GB), lang="en-GB"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value with language and region subtags will match a lang attribute value with the same subtags.',
	],
	'pseudo-classes/css3-selectors-lang-009.html': [
	'CSS3 Selectors: :lang(en-GB), lang="en-GB-scouse"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value with a multiple subtags will match a lang attribute value with multiple subtags as long as the first part is the same.',
	],
	'pseudo-classes/css3-selectors-lang-010.html': [
	'CSS3 Selectors: :lang(en-GB), lang="en-US"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value and a lang attribute value will NOT match if their region subtags differ.',
	],
	'pseudo-classes/css3-selectors-lang-011.html': [
	'CSS3 Selectors: :lang(az-Arab-IR), lang="az-Arab-IR"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value with language, script and region subtags will match a lang attribute value with the same language, script and region subtags.',
	],
	'pseudo-classes/css3-selectors-lang-012.html': [
	'CSS3 Selectors: :lang(az-Arab-IR), lang="az-IR"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value with language, script and region subtags will NOT match a lang attribute value with the script subtag missing.',
	],
	'pseudo-classes/css3-selectors-lang-014.html': [
	'CSS3 Selectors: :lang(cs-CZ), lang="cs-Latn-CZ"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value with language and region subtags will NOT match a lang attribute value with language, script and region subtags.',
	],
	'pseudo-classes/css3-selectors-lang-015.html': [
	'CSS3 Selectors: :lang(az-Arab-IR), lang="az-arab-IR"',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'A :lang value will match a lang attribute value regardless of case differences in the script tag.',
	],
	'pseudo-classes/css3-selectors-lang-016.html': [
	'CSS3 Selectors: :lang(es), xml:lang="es" (html)',
	'http://www.w3.org/TR/selectors/Overview.html#lang-pseudo',
	'[Exploratory] A :lang value that matches an identical xml:lang attribute value will NOT produce styling in pages served as HTML.',
	],
	'attribute-selectors/css3-selectors-lang-021.html': [
	'CSS3 Selectors: [lang|="es"], lang="es"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value that matches an identical lang attribute value on the same element will produce styling.',
	],
	'attribute-selectors/css3-selectors-lang-022.html': [
	'CSS3 Selectors: [lang|="es"], lang="es" on parent',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value that matches an identical lang attribute value on the parent element will NOT produce styling.',
	],
	'attribute-selectors/css3-selectors-lang-024.html': [
	'CSS3 Selectors: [lang|="es"], lang="ES"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value will match a lang attribute value regardless of case differences.',
	],
	'attribute-selectors/css3-selectors-lang-025.html': [
	'CSS3 Selectors: [lang|="es"], lang="es-MX"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value will match a lang attribute value when the latter contains additional subtags.',
	],
	'attribute-selectors/css3-selectors-lang-026.html': [
	'CSS3 Selectors: [lang|="es-MX"], lang="es"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value will NOT match a lang attribute value when the former contains more subtags.',
	],
	'attribute-selectors/css3-selectors-lang-027.html': [
	'CSS3 Selectors: [lang|="es"], lang="mx-es"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'When the lang|= value uses a single subtag, it will NOT match against an attribute value where it appears in a different position.',
	],
	'attribute-selectors/css3-selectors-lang-028.html': [
	'CSS3 Selectors: [lang|="en-GB"], lang="en-GB"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value with language and region subtags will match a lang attribute value with the same subtags.',
	],
	'attribute-selectors/css3-selectors-lang-029.html': [
	'CSS3 Selectors: [lang|="en-GB"], lang="en-GB-scouse"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value with a multiple subtags will match a lang attribute value with multiple subtags as long as the first part is the same.',
	],
	'attribute-selectors/css3-selectors-lang-030.html': [
	'CSS3 Selectors: [lang|="en-GB"], lang="en-US"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value and a lang attribute value will NOT match if their region subtags differ.',
	],
	'attribute-selectors/css3-selectors-lang-031.html': [
	'CSS3 Selectors: [lang|="az-Arab-IR"], lang="az-Arab-IR"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value with language, script and region subtags will match a lang attribute value with the same language, script and region subtags.',
	],
	'attribute-selectors/css3-selectors-lang-032.html': [
	'CSS3 Selectors: [lang|="az-Arab-IR"], lang="az-IR"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value with language, script and region subtags will NOT match a lang attribute value with the script subtag missing.',
	],
	'attribute-selectors/css3-selectors-lang-034.html': [
	'CSS3 Selectors: [lang|="cs-CZ"], lang="cs-Latn-CZ"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value with language and region subtags will NOT match a lang attribute value with language, script and region subtags.',
	],
	'attribute-selectors/css3-selectors-lang-035.html': [
	'CSS3 Selectors: [lang|="az-Arab-IR"], lang="az-arab-IR"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value will match a lang attribute value regardless of case differences in the script tag.',
	],
	'attribute-selectors/css3-selectors-lang-036.html': [
	'CSS3 Selectors: [lang|="es"], xml:lang="es" (html)',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'[Exploratory] A [lang|="es"] value that matches an identical xml:lang attribute value will NOT produce styling in pages served as HTML.',
	],
	'attribute-selectors/css3-selectors-lang-041.html': [
	'CSS3 Selectors: [lang="es"], lang="es"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value that matches an identical lang attribute value on the same element will produce styling.',
	],
	'attribute-selectors/css3-selectors-lang-042.html': [
	'CSS3 Selectors: [lang="es"], lang="es" on parent',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang|= value that matches an identical lang attribute value on the parent element will NOT produce styling.',
	],
	'attribute-selectors/css3-selectors-lang-044.html': [
	'CSS3 Selectors: [lang="es"], lang="ES"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value will match a lang attribute value regardless of case differences.',
	],
	'attribute-selectors/css3-selectors-lang-045.html': [
	'CSS3 Selectors: [lang="es"], lang="es-MX"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value will NOT match a lang attribute value when the latter contains additional subtags.',
	],
	'attribute-selectors/css3-selectors-lang-046.html': [
	'CSS3 Selectors: [lang="es-MX"], lang="es"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value will NOT match a lang attribute value when the former contains more subtags.',
	],
	'attribute-selectors/css3-selectors-lang-047.html': [
	'CSS3 Selectors: [lang="es"], lang="mx-es"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'When the lang= value uses a single subtag, it will NOT match against an attribute value where it appears in a different position.',
	],
	'attribute-selectors/css3-selectors-lang-048.html': [
	'CSS3 Selectors: [lang="en-GB"], lang="en-GB"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value with language and region subtags will match a lang attribute value with the same subtags.',
	],
	'attribute-selectors/css3-selectors-lang-049.html': [
	'CSS3 Selectors: [lang="en-GB"], lang="en-GB-scouse"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value with multiple subtags will NOT match a lang attribute value with multiple subtags if the latter has more subtags, even if the first two subtags are the same.',
	],
	'attribute-selectors/css3-selectors-lang-050.html': [
	'CSS3 Selectors: [lang="en-GB"], lang="en-US"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value and a lang attribute value will NOT match if their region subtags differ.',
	],
	'attribute-selectors/css3-selectors-lang-051.html': [
	'CSS3 Selectors: [lang="az-Arab-IR"], lang="az-Arab-IR"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value with language, script and region subtags will match a lang attribute value with the same language, script and region subtags.',
	],
	'attribute-selectors/css3-selectors-lang-052.html': [
	'CSS3 Selectors: [lang="az-Arab-IR"], lang="az-IR"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value with language, script and region subtags will NOT match a lang attribute value with the script subtag missing.',
	],
	'attribute-selectors/css3-selectors-lang-054.html': [
	'CSS3 Selectors: [lang="cs-CZ"], lang="cs-Latn-CZ"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value with language and region subtags will NOT match a lang attribute value with language, script and region subtags.',
	],
	'attribute-selectors/css3-selectors-lang-055.html': [
	'CSS3 Selectors: [lang="az-Arab-IR"], lang="az-arab-IR"',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'A lang= value will match a lang attribute value regardless of case differences in the script tag.',
	],
	'attribute-selectors/css3-selectors-lang-056.html': [
	'CSS3 Selectors: [lang="es"], xml:lang="es" (html)',
	'http://www.w3.org/TR/selectors/#attribute-selectors',
	'[Exploratory] A [lang=es] value that matches an identical xml:lang attribute value will NOT produce styling in pages served as HTML.',
	],
}
