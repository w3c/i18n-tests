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
hints.vertical_text = `
<p>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</p>
<p>text-orientation: mixed | upright | sideways</p>
<p>text-combine-upright: none | all | digits xx</p>

<ul class="notes">
<li>Spec links: <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#block-flow">writing-mode</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-orientation">text-orientation</a> <a href="https://w3c.github.io/csswg-drafts/css-writing-modes/#text-combine-upright">text-combine-upright</a></li>
</ul>
`