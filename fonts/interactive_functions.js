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


function setText (value) {
if (value.includes('<script') || value.includes('../')) document.getElementById('in').value = "Badly formed text!"
if (document.getElementById('test')) document.getElementById('test').innerHTML = document.getElementById('in').value
if (document.getElementById('normal')) document.getElementById('normal').innerHTML = document.getElementById('in').value
if (document.getElementById('textarea')) document.getElementById('textarea').innerHTML = document.getElementById('in').value
if (document.getElementById('html')) document.getElementById('html').innerHTML = document.getElementById('in').value
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



