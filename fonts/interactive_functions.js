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
document.getElementById('test').innerHTML = document.getElementById('in').value
}


function setBoxWidth (value) {
document.getElementById('sizeIndicator').textContent = value
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) tests[i].style.width = value+'px'
}


function setBoxHeight (value) {
document.getElementById('sizeIndicator').textContent = Math.floor(value)
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) tests[i].style.height = value+'px'
}



