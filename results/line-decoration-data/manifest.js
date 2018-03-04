var tests = {
	'text-decoration-001.html': [
	'text-decoration underline',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line at or under the alphabetic baseline',
	],
	'text-decoration-001a.html': [
	'text-decoration underline non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; works for various non-Latin scripts [exploratory test]',
	],
	'text-decoration-002.html': [
	'text-decoration overline',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; there is an overline',
	],
	'text-decoration-002a.html': [
	'text-decoration overline non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; works for various non-Latin scripts [exploratory test]',
	],
	'text-decoration-003.html': [
	'text-decoration line-through',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a solid line through the centre of the characters',
	],
	'text-decoration-003a.html': [
	'text-decoration line-through non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; works for various non-Latin scripts [exploratory test]',
	],
	'text-decoration-004.html': [
	'text-decoration underline overline',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline overline; there is an overline and an underline',
	],
	'text-decoration-041.html': [
	'text-decoration underline tbrl (zh)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the LEFT of the characters',
	],
	'text-decoration-042.html': [
	'text-decoration underline tbrl (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the RIGHT of the characters for Japanese [exploratory test]',
	],
	'text-decoration-040a.html': [
	'text-decoration underline tbrl mixed',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a single line to the LEFT of the characters for all lines',
	],
	'text-decoration-040b.html': [
	'text-decoration underline tbrl mixed (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a single line to the RIGHT of the characters for all lines in Japanese [exploratory test]',
	],
	'text-decoration-040.html': [
	'text-decoration underline tbrl hor scripts',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: vertical-rl',
	],
	'text-decoration-045.html': [
	'text-decoration-line overline tbrl (zh)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters',
	],
	'text-decoration-046.html': [
	'text-decoration-line overline tbrl (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters for Japanese  [exploratory test]',
	],
	'text-decoration-046a.html': [
	'text-decoration-line overline tbrl mixed',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters for all lines',
	],
	'text-decoration-046b.html': [
	'text-decoration-line overline tbrl mixed (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters for all lines in Japanese [exploratory test]',
	],
	'text-decoration-044.html': [
	'text-decoration-line overline tbrl hor scripts',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: vertical-rl',
	],
	'text-decoration-048.html': [
	'text-decoration line-through vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a solid vertical line through the centre of the characters',
	],
	'text-decoration-048a.html': [
	'text-decoration line-through vertical-rl hor scripts',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a solid vertical line through the centre of the characters',
	],
	'text-decoration-049.html': [
	'text-decoration vertical-rl over+under',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline overline; there is a vertical line on both sides of the characters',
	],
	'text-decoration-080.html': [
	'text-decoration tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the RIGHT of the characters [exploratory test]',
	],
	'text-decoration-081.html': [
	'text-decoration tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; there is a line to the LEFT of the characters [exploratory test]',
	],
	'text-decoration-085.html': [
	'text-decoration tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a solid vertical line through the centre of the characters.',
	],
	'text-decoration-082.html': [
	'text-decoration tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline overline; there is a line on both sides of the characters',
	],
	'text-decoration-090.html': [
	'text-decoration underline sideways-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-090a.html': [
	'text-decoration underline sideways-rl non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-091.html': [
	'text-decoration overline sideways-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-091a.html': [
	'text-decoration overline sideways-rl non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-092.html': [
	'text-decoration line-through sideways-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-092a.html': [
	'text-decoration line-through sideways-rl non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-095.html': [
	'text-decoration underline sideways-lr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-095a.html': [
	'text-decoration underline sideways-lr non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-096.html': [
	'text-decoration overline sideways-lr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-096a.html': [
	'text-decoration overline sideways-lr non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-097.html': [
	'text-decoration line-through sideways-lr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-097a.html': [
	'text-decoration line-through sideways-lr non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-line-001.html': [
	'text-decoration-line underline',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line at or under the alphabetic baseline',
	],
	'text-decoration-line-001a.html': [
	'text-decoration-line underline non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; works for various non-Latin scripts [exploratory test]',
	],
	'text-decoration-line-002.html': [
	'text-decoration-line overline',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is an overline',
	],
	'text-decoration-line-002a.html': [
	'text-decoration-line overline non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; works for various non-Latin scripts [exploratory test]',
	],
	'text-decoration-line-003.html': [
	'text-decoration-line line-through',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a solid line through the centre of the characters',
	],
	'text-decoration-line-003a.html': [
	'text-decoration-line line-through non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; works for various non-Latin scripts [exploratory test]',
	],
	'text-decoration-line-004.html': [
	'text-decoration-line underline overline',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline overline; there is an overline and an underline',
	],
	'text-decoration-line-041.html': [
	'text-decoration-line underline tbrl (zh)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the LEFT of the characters',
	],
	'text-decoration-line-042.html': [
	'text-decoration-line underline tbrl (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the RIGHT of the characters for Japanese [exploratory test]',
	],
	'text-decoration-line-040a.html': [
	'text-decoration-line underline tbrl mixed',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a single line to the LEFT of the characters for all lines',
	],
	'text-decoration-line-040b.html': [
	'text-decoration-line underline tbrl mixed (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a single line to the RIGHT of the characters for all lines in Japanese [exploratory test]',
	],
	'text-decoration-line-040.html': [
	'text-decoration-line underline tbrl hor scripts',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: vertical-rl',
	],
	'text-decoration-line-045.html': [
	'text-decoration-line overline tbrl (zh)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters',
	],
	'text-decoration-line-046.html': [
	'text-decoration-line overline tbrl (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters for Japanese  [exploratory test]',
	],
	'text-decoration-line-046a.html': [
	'text-decoration-line overline tbrl mixed',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters for all lines',
	],
	'text-decoration-line-046b.html': [
	'text-decoration-line overline tbrl mixed (ja)',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters for all lines in Japanese [exploratory test]',
	],
	'text-decoration-line-044.html': [
	'text-decoration-line overline tbrl hor scripts',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: vertical-rl',
	],
	'text-decoration-line-048.html': [
	'text-decoration-line line-through vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a solid vertical line through the centre of the characters',
	],
	'text-decoration-line-048a.html': [
	'text-decoration-line line-through vertical-rl hor scripts',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a solid vertical line through the centre of the characters',
	],
	'text-decoration-line-049.html': [
	'text-decoration-line vertical-rl over+under',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline overline; there is a vertical line on both sides of the characters',
	],
	'text-decoration-line-080.html': [
	'text-decoration-line tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the RIGHT of the characters [exploratory test]',
	],
	'text-decoration-line-081.html': [
	'text-decoration-line tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters [exploratory test]',
	],
	'text-decoration-line-085.html': [
	'text-decoration-line tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a solid vertical line through the centre of the characters.',
	],
	'text-decoration-line-082.html': [
	'text-decoration-line tblr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline overline; there is a line on both sides of the characters',
	],
	'text-decoration-line-090.html': [
	'text-decoration-line underline sideways-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-090a.html': [
	'text-decoration-line underline sideways-rl non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-091.html': [
	'text-decoration-line overline sideways-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-091a.html': [
	'text-decoration-line overline sideways-rl non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-092.html': [
	'text-decoration-line line-through sideways-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-092a.html': [
	'text-decoration-line line-through sideways-rl non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-095.html': [
	'text-decoration-line underline sideways-lr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-rl',
	],
	'text-decoration-line-095a.html': [
	'text-decoration-line underline sideways-lr non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:underline; there is a line to the RIGHT of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-line-096.html': [
	'text-decoration-line overline sideways-lr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-line-096a.html': [
	'text-decoration-line overline sideways-lr non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:overline; there is a line to the LEFT of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-line-097.html': [
	'text-decoration-line line-through sideways-lr',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-line-097a.html': [
	'text-decoration-line line-through sideways-lr non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration-line:line-through; there is a line through the CENTRE of the characters for horizontal scripts set vertically using writing-mode: sideways-lr',
	],
	'text-decoration-style-009.html': [
	'text-decoration-style solid',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:solid; there is a solid line below the characters',
	],
	'text-decoration-style-010.html': [
	'text-decoration-style double',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:double; there is a double solid line below the characters',
	],
	'text-decoration-style-011.html': [
	'text-decoration-style dashed',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:dashed; there is a dashed line below the characters',
	],
	'text-decoration-style-012.html': [
	'text-decoration-style dotted',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:dotted; there is a dotted line below the characters',
	],
	'text-decoration-style-014.html': [
	'text-decoration-style wavy',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:wavy; there is a wavy line below the characters',
	],
	'text-decoration-style-060.html': [
	'text-decoration-style solid tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:solid; there is a solid vertical line on one side of the characters',
	],
	'text-decoration-style-061.html': [
	'text-decoration-style double tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:double; there is a solid vertical double line on one side of the characters',
	],
	'text-decoration-style-062.html': [
	'text-decoration-style dashed tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:dashed; there is a dashed vertical line on one side of the characters',
	],
	'text-decoration-style-063.html': [
	'text-decoration-style dotted tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:dotted; there is a dotted vertical line on one side of the characters',
	],
	'text-decoration-style-064.html': [
	'text-decoration-style wavy tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-style:wavy; there is a wavy vertical line on one side of the characters',
	],
	'text-decoration-style-065.html': [
	'text-decoration-style overline dashed tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:overline; text-decoration-style:dashed; there is a dashed vertical line on one side of the characters',
	],
	'text-decoration-skip-015.html': [
	'text-decoration-skip spaces',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces; the line below the characters skips ordinary spaces',
	],
	'text-decoration-skip-015a.html': [
	'text-decoration-skip spaces non-Latin',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces; the line below the characters skips spaces',
	],
	'text-decoration-skip-015b.html': [
	'text-decoration-skip white space',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces; the line below the characters skips the spaces',
	],
	'text-decoration-skip-015c.html': [
	'text-decoration-skip word separators',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces; the line below the characters skips the characters around the words',
	],
	'text-decoration-skip-016.html': [
	'text-decoration-skip ink',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:ink; the line below the characters avoids overwriting glyph ink',
	],
	'text-decoration-skip-017.html': [
	'text-decoration-skip edges',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:edges; there is a small gap in the line where the two spans meet',
	],
	'text-decoration-skip-018.html': [
	'text-decoration-skip spaces ink',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces ink; spaces are skipped and there is a small gap in the line where the two spans meet',
	],
	'text-decoration-skip-066.html': [
	'text-decoration-skip spaces tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces; the line alongside the characters skips spaces',
	],
	'text-decoration-skip-068.html': [
	'text-decoration-skip mongolian NNBSP',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces; the line alongside the characters DOES NOT skip the NNBSP (the 1st gap in the text), but does skip ordinary space (the 2nd gap) [exploratory test]',
	],
	'text-decoration-skip-069.html': [
	'text-decoration-skip ink tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:ink; the line alongside the characters avoids overwriting glyph ink',
	],
	'text-decoration-skip-070.html': [
	'text-decoration-skip edges tbrl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-decoration-skip:spaces ink; there is a small gap in the line where the two spans meet',
	],
	'text-underline-position-019.html': [
	'text-underline-position auto',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:auto; the underline is placed at or under the alphabetic baseline, unless the script works better with a line further from the baseline',
	],
	'text-underline-position-020.html': [
	'text-underline-position under',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:under; the underline is low enough to avoid crossing the descenders',
	],
	'text-underline-position-021.html': [
	'text-underline-position under left',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:under left; the underline is low enough to avoid crossing the descenders',
	],
	'text-underline-position-022.html': [
	'text-underline-position under right',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:under right; the underline is low enough to avoid crossing the descenders',
	],
	'text-underline-position-071.html': [
	'text-underline-position tbrl auto vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:auto; the underline is placed alongside the characters, and may or may not cross any descenders',
	],
	'text-underline-position-072.html': [
	'text-underline-position under vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:under; the line is far enough away to avoid crossing any descenders',
	],
	'text-underline-position-073.html': [
	'text-underline-position left vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:left; the line is to the left of the characters for all lines',
	],
	'text-underline-position-074.html': [
	'text-underline-position under left vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:under left; the line is to the left of the characters for all lines',
	],
	'text-underline-position-075.html': [
	'text-underline-position right vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:right; the line is to the right of the characters for all lines',
	],
	'text-underline-position-076.html': [
	'text-underline-position under right vertical-rl',
	'https://drafts.csswg.org/css-text-decor-3/#line-decoration',
	'text-decoration:underline; text-underline-position:under right; the line is to the right of the characters for all lines',
	],
}