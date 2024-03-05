function setLanguage (value) { 
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) { tests[i].lang = value }
document.getElementById('language').value = value
}


function setFont (value) {
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) { tests[i].style.fontFamily = value }
}



function setFontSize (value) {
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) tests[i].style.fontSize = value+'px'
document.getElementById('sizeOfFont').textContent = value
}


function setText (markup) {
if (markup.includes('<script') || markup.includes('../')) {
    alert( "Badly formed text!" )
    return
    }
document.getElementById('test').innerHTML = markup
}


function setCSS (css) {

if (css.includes('<script') || css.includes('../')) {
    document.alert( "Badly formed text!" )
    return
    }
document.getElementById('css_code').innerHTML = css
}


function setBoxWidth (value) {
document.getElementById('wSizeIndicator').textContent = value
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) tests[i].style.width = value+'px'
}


function setBoxHeight (value) {
document.getElementById('vSizeIndicator').textContent = Math.floor(value)
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) tests[i].style.height = value+'px'
}





//    HINTS

hints = {}

hints.none = ``


// Vertical text
hints.vertical = `
<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>
<p>text-orientation: mixed | upright | sideways</p>
<p>text-combine-upright: none | all | digits xx</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-vertical-text.html">Vertical text results</a> •
<a href="https://github.com/w3c/text_direction_tests/issues">Text direction test repo</a></li>

<li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul>
`

// Bidi text
hints.bidi = `
<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-bidi-text.html">Bidi text results</a> •
<a href="https://github.com/w3c/text_direction_tests/issues">Text direction test repo</a></li>

<!--li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul-->
`

// Fonts 
hints.fonts = `
<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-fonts.html">Fonts results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<!--li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul-->
`

// Cursive text
hints.cursive = `
<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-cursive.html">Cursive text results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<!--li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul-->
`

// Transforming characters
hints.transforms = `
<p>text-transform: none | [ capitalize | uppercase | lowercase ] || full-width || full-size-kana</p>
<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-transforms.html">Transforming characters results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<li>Spec links: <a href="https://drafts.csswg.org/css-text/#text-transform">text-transform</a></li>
</ul>
`

// Grapheme/word segmentation & selection
hints.grapheme = `
<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-grapheme-word-segmentation.html">Grapheme/word segmentation & selection results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<!--li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul-->
`

// Text decoration
hints.decoration = `
<p>text-decoration-line: none | [ underline || overline || line-through ] | spelling-error | grammar-error</p>
<p>text-underline-position: auto | [ from-font | under ] || [ left | right ]</p>
<p>text-decoration-style: solid double dotted dashed wavy</p>
<p>text-decoration-color: color_name</p>
<p>text-decoration-thickness: auto | from-font | length | percentage</p>
<p>text-underline-offset: auto | length | percentage</p>
<p>text-decoration-skip-ink: auto none all</p>
<p>text-decoration-skip-spaces: none | all | [ start || end ]</p>
<p>text-decoration-skip-inset: none auto</p>
<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-text-decoration.html">Text decoration results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<li>Spec links: <a href="https://drafts.csswg.org/css-text-decor-3/#text-decoration-line-property">text-decoration-line</a> •
<a href="https://drafts.csswg.org/css-text-decor-3/#text-underline-position-property">text-underline-position</a> •
<a href="https://drafts.csswg.org/css-text-decor-3/#text-decoration-style-property">text-decoration-style</a> •
<a href="https://drafts.csswg.org/css-text-decor-3/#text-decoration-color-property">text-decoration-color</a> •
<a href="https://www.w3.org/TR/css-text-decor-4/#text-decoration-width-property">text-decoration-thickness</a> •
<a href="https://www.w3.org/TR/css-text-decor-4/#underline-offset">text-underline-offset</a> •
<a href="https://www.w3.org/TR/css-text-decor-4/#text-decoration-skip-ink-property">text-decoration-skip-ink</a> •
<a href="https://www.w3.org/TR/css-text-decor-4/#text-decoration-skip-spaces-property">text-decoration-skip-spaces</a> •
<a href="https://www.w3.org/TR/css-text-decor-4/#text-decoration-skip-inset-property">text-decoration-skip-inset</a></li>
</ul>
`

// Text emphasis
hints.emphasis = `
<p>text-emphasis-style: none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | string: ""</p>
<p>text-emphasis-position: [ over | under ] && [ right | left ]</p>
<p>text-emphasis-color: color_name</p>
<p>text-emphasis-skip: spaces || punctuation || symbols || narrow</p>
<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-text-emphasis.html">Text emphasis results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<li>Spec links:  <a href="https://drafts.csswg.org/css-text-decor-4/#propdef-text-emphasis-style">text-emphasis-style</a> •
<a href="https://drafts.csswg.org/css-text-decor-4/#text-emphasis-position-property">text-emphasis-position</a> •
<a href="https://drafts.csswg.org/css-text-decor-4/#text-emphasis-color-property">text-emphasis-color</a> •
<a href="https://drafts.csswg.org/css-text-decor-4/#text-emphasis-skip">text-emphasis-skip</a></li>
</ul>
`

// Quotations
hints.quotations = `
<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-quotations.html">Quotations results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<!--li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul-->
`

// Inline notes & annotations
hints.annotations = `
<p>ruby-position: over under inter-character</p>
<p>[Proprietary] -webkit-ruby-position: before after</p>
<p>ruby-align: start center space-between space-around</p>
<p>[Proprietary] distributed-letter distributed-space</p>
<p>ruby-merge: separate collapse auto</p>
<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-inline-notes-annotations.html">Inline notes & annotations results</a> •
<a href="https://github.com/w3c/character_phrase_tests/issues">Characters & phrases test repo</a></li>

<li>Spec links: <a href="https://drafts.csswg.org/css-ruby-1/#rubypos">ruby-position</a> 
<a href="https://drafts.csswg.org/css-ruby-1/#ruby-align-property">ruby-align</a> 
<a href="https://drafts.csswg.org/css-ruby-1/#collapsed-ruby">ruby-merge</a></li>
</ul>
`




// Line breaking & hyphenation
hints.breaking = `
<ul class="notes">
<p>hyphens: manual auto none</p>

<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-line-breaking.html">Line breaking & hyphenation results</a> •
<a href="https://github.com/w3c/line_paragraph_tests/issues">Lines & paragraphs test repo</a></li>

<li>Spec links: <a href="https://www.w3.org/TR/2018/WD-css-text-3-20180920/#line-breaking">line-breaking</a> • <a href="https://drafts.csswg.org/css-text-3/#hyphens-property">hyphens</a></li>
</ul>
`

// Text alignment & justification
hints.justification = `
<p>text-align: start end left right center justify justify-all</p>
<p>text-justify: auto none inter-word inter-character</p>
<p>ruby-align: start center space-between space-around</p>
<p>text-align-last: auto start end left right justify</p>

<p>text-indent: length | percentage && hanging ? && each-line ?</p>
<p>hanging-punctuation: none | [ first || [ force-end | allow-end ] || last ]</p>

<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-text-alignment-justification.html">Text alignment & justification results</a> •
<a href="https://github.com/w3c/line_paragraph_tests/issues">Lines & paragraphs test repo</a></li>

<li>Spec links: <a href="https://www.w3.org/TR/css-text-3/#text-align-property">text-align</a> <a href="https://www.w3.org/TR/css-text-3/#text-justify-property">text-justify</a> <a href="https://www.w3.org/TR/css-text-3/#text-align-last-property">text-align-last</a> • <a href="https://drafts.csswg.org/css-text-3/#text-indent-property">text-indent</a> •
<a href="https://drafts.csswg.org/css-text-3/#hanging-punctuation-property">hanging-punctuation</a></li>
</ul>
`

// Letter/word spacing
hints.spacing = `
<p>letter-spacing: normal length</p>
<p>word-spacing: normal length</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-letter-spacing.html">Letter/word spacing results</a> •
<a href="https://github.com/w3c/line_paragraph_tests/issues">Lines & paragraphs test repo</a></li>

<li>Spec links: <a href="https://drafts.csswg.org/css-text/#letter-spacing-property">letter-spacing</a> •
<a href="https://drafts.csswg.org/css-text/#word-spacing-property">word-spacing</a> •
<a href="https://drafts.csswg.org/css-writing-modes-4/">writing-mode</a></li>
</ul>
`

// Lists, counters, etc
hints.counters = `
<p>list-style-type: style_name</p>

<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-lists-counters-etc.html">Lists, counters, etc results</a> •
<a href="https://github.com/w3c/line_paragraph_tests/issues">Lines & paragraphs test repo</a></li>

<li>Spec links: <a href="https://drafts.csswg.org/css-lists-3/#text-markers">list-style-type</a> <a href="https://drafts.csswg.org/css-lists-3/#marker-pseudo">::marker</a> <a href="https://www.w3.org/TR/css-text-3/#text-align-last-property">text-combine-upright</a></li>
</ul>
`

// Styling initials
hints.initials = `
<p>initial-letters: normal | <number> <integer> | <number> && [ drop | raise ]?</p>
<p>-webkit-initial-letter: normal | <number> <integer> | <number> && [ drop | raise ]?</p>
<p>initial-letters-align: border-box? [ alphabetic | ideographic | hebrew | hanging ] | border-box</p>

<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>

<ul class="notes">
<li>Test links: <a href="https://www.w3.org/International/i18n-tests/results/int-styling-initials.html">Styling initials results</a> •
<a href="https://github.com/w3c/line_paragraph_tests/issues">Lines & paragraphs test repo</a></li>

<li>Spec links:  <a href="https://drafts.csswg.org/selectors-3/#first-letter">::first-letter</a> • <a href="https://drafts.csswg.org/css-inline-3/#sizing-drop-initials">initial-letters</a></li>
</ul>
`













































