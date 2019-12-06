function setLanguage (value) {
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) { tests[i].lang = value }
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
document.getElementById('test').textContent = document.getElementById('in').value
}


function setBoxWidth (value) {
document.getElementById('sizeIndicator').textContent = Math.floor(window.innerWidth/100*value)
tests = document.querySelectorAll('.test')
for (let i=0;i<tests.length;i++) tests[i].style.width = value+'%'
}
