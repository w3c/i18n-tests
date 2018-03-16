var tests = {
	'ja/css-text-line-break-ja-cj-strict.html': [
	'line-break:strict, Conditional Japanese Starter (CJ) (ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'With line-break:strict, a browser will NOT allow a conditional Japanese starter at the beginning of a line.',
	],
	'ja/css-text-line-break-ja-cj-normal.html': [
	'Line-break:normal, Conditional Japanese Starter (CJ) (ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] The browser may allow a conditional Japanese starter at the beginning of a line.',
	],
	'ja/css-text-line-break-ja-cj-loose.html': [
	'Line-break:loose, Conditional Japanese Starter (CJ) (ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] The browser may allow a conditional Japanese starter at the beginning of a line.',
	],
	'ja/css-text-line-break-ja-hyphens-strict.html': [
	'CSS3 Text, linebreaks: hyphens (strict,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:strict, a browser will NOT allow a break before a hyphen.',
	],
	'ja/css-text-line-break-ja-iteration-strict.html': [
	'CSS text, linebreaks: iteration (strict,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:strict, a browser will NOT allow a break before an iteration mark.',
	],
	'ja/css-text-line-break-ja-in-strict.html': [
	'CSS text, linebreaks: IN (strict,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:strict, a browser will NOT allow a break before an inseparable character.',
	],
	'ja/css-text-line-break-ja-cpm-strict.html': [
	'CSS text, linebreaks: centred punctuation (strict,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:strict, a browser will NOT allow a break before one of the centred punctuation characters listed.',
	],
	'ja/css-text-line-break-ja-po-strict.html': [
	'CSS text, linebreaks: PO AFW (strict,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:strict, a browser will NOT allow a break before a PO character with East Asian Width of A, F, or W.',
	],
	'ja/css-text-line-break-ja-hyphens-normal.html': [
	'CSS3 Text, linebreaks: hyphens (normal,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Japanese, and line-break:normal, a browser may allow a break before a hyphen.',
	],
	'ja/css-text-line-break-ja-iteration-normal.html': [
	'CSS text, linebreaks: iteration (normal,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:normal, a browser will NOT allow a break before an iteration mark.',
	],
	'ja/css-text-line-break-ja-in-normal.html': [
	'CSS text, linebreaks: IN (normal,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:normal, a browser will NOT allow a break before an inseparable character.',
	],
	'ja/css-text-line-break-ja-cpm-normal.html': [
	'CSS text, linebreaks: centred punctuation (normal,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:normal, a browser will NOT allow a break before one of the centred punctuation characters listed.',
	],
	'ja/css-text-line-break-ja-po-normal.html': [
	'CSS text, linebreaks: PO AFW (normal,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Japanese, and line-break:normal, a browser will NOT allow a break before a PO character with East Asian Width of A, F, or W.',
	],
	'ja/css-text-line-break-ja-hyphens-loose.html': [
	'CSS3 Text, linebreaks: hyphens (loose,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Japanese, and line-break:loose, a browser may allow a break before a hyphen.',
	],
	'ja/css-text-line-break-ja-iteration-loose.html': [
	'CSS text, linebreaks: iteration (loose,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Japanese, and line-break:loose, a browser may allow a break before an iteration mark.',
	],
	'ja/css-text-line-break-ja-in-loose.html': [
	'CSS text, linebreaks: IN (loose,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Japanese, and line-break:loose, a browser may allow a break before an inseparable character.',
	],
	'ja/css-text-line-break-ja-cpm-loose.html': [
	'CSS text, linebreaks: centred punctuation (loose,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Japanese, and line-break:loose, a browser may allow a break before one of the centred punctuation characters listed.',
	],
	'ja/css-text-line-break-ja-po-loose.html': [
	'CSS text, linebreaks: PO AFW (loose,ja)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Japanese, and line-break:loose, a browser may allow a break before a PO character with East Asian Width of A, F, or W.',
	],
	'zh/css-text-line-break-zh-hyphens-strict.html': [
	'CSS3 Text, linebreaks: hyphens (strict,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:strict, a browser will NOT allow a break before a hyphen.',
	],
	'zh/css-text-line-break-zh-iteration-strict.html': [
	'CSS text, linebreaks: iteration (strict,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:strict, a browser will NOT allow a break before an iteration mark.',
	],
	'zh/css-text-line-break-zh-in-strict.html': [
	'CSS text, linebreaks: IN (strict,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:strict, a browser will NOT allow a break before an inseparable character.',
	],
	'zh/css-text-line-break-zh-cpm-strict.html': [
	'CSS text, linebreaks: centred punctuation (strict,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:strict, a browser will NOT allow a break before one of the centred punctuation characters listed.',
	],
	'zh/css-text-line-break-zh-po-strict.html': [
	'CSS text, linebreaks: PO AFW (strict,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:strict, a browser will NOT allow a break before a PO character with East Asian Width of A, F, or W.',
	],
	'zh/css-text-line-break-zh-hyphens-normal.html': [
	'CSS3 Text, linebreaks: hyphens (normal,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Chinese, and line-break:normal, a browser may allow a break before a hyphen.',
	],
	'zh/css-text-line-break-zh-iteration-normal.html': [
	'CSS text, linebreaks: iteration (normal,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:normal, a browser will NOT allow a break before an iteration mark.',
	],
	'zh/css-text-line-break-zh-in-normal.html': [
	'CSS text, linebreaks: IN (normal,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:normal, a browser will NOT allow a break before an inseparable character.',
	],
	'zh/css-text-line-break-zh-cpm-normal.html': [
	'CSS text, linebreaks: centred punctuation (normal,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:normal, a browser will NOT allow a break before one of the centred punctuation characters listed.',
	],
	'zh/css-text-line-break-zh-po-normal.html': [
	'CSS text, linebreaks: PO AFW (normal,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'When the language is Chinese, and line-break:normal, a browser will NOT allow a break before a PO character with East Asian Width of A, F, or W.',
	],
	'zh/css-text-line-break-zh-hyphens-loose.html': [
	'CSS3 Text, linebreaks: hyphens (loose,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Chinese, and line-break:loose, a browser may allow a break before a hyphen.',
	],
	'zh/css-text-line-break-zh-iteration-loose.html': [
	'CSS text, linebreaks: iteration (loose,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Chinese, and line-break:loose, a browser may allow a break before an iteration mark.',
	],
	'zh/css-text-line-break-zh-in-loose.html': [
	'CSS text, linebreaks: IN (loose,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Chinese, and line-break:loose, a browser may allow a break before an inseparable character.',
	],
	'zh/css-text-line-break-zh-cpm-loose.html': [
	'CSS text, linebreaks: centred punctuation (loose,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Chinese, and line-break:loose, a browser may allow a break before one of the centred punctuation characters listed.',
	],
	'zh/css-text-line-break-zh-po-loose.html': [
	'CSS text, linebreaks: PO AFW (loose,zh)',
	'https://drafts.csswg.org/css-text-3/#line-breaking',
	'[Exploratory] When the language is Chinese, and line-break:loose, a browser may allow a break before a PO character with East Asian Width of A, F, or W.',
	],
}
