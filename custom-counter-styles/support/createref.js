function completeTest (sep) {
var boxDiv = document.createElement('div')
boxDiv.style.position = 'relative'
var ols = document.querySelectorAll('ol')
for (let i=0;i<ols.length;i++) ols[i].style.padding = '0'
var testDiv = document.querySelector('.test')
var listItems = testDiv.querySelectorAll('li')
console.log(listItems)
var body = document.querySelector('body')
var ref = document.createElement('div')
for (let i=0;i<listItems.length;i++) {
	var refSubdiv = document.createElement('div')
	refSubdiv.appendChild(document.createTextNode(listItems[i].textContent+sep))
	refSubdiv.style.lineHeight = '40px'
	refSubdiv.style.fontSize = '35px'
	refSubdiv.style.color = 'red'
	refSubdiv.style.zIndex = '-100'
	ref.appendChild(refSubdiv)
	listItems[i].textContent = ''
		span = document.createElement('span')
		span.style.backgroundColor = '#ccc'
		span.style.color = '#ccc'
		span.textContent = '|'
		listItems[i].appendChild(span)
	listItems[i].style.listStylePosition = 'inside'
	listItems[i].style.margin = '0'
	listItems[i].style.padding = '0'
	listItems[i].style.lineHeight = '40px'
	listItems[i].style.color = 'black'
	listItems[i].style.fontSize = '35px'
	listItems[i].style.zIndex = '100'
	}
ref.style.position = 'absolute'
ref.style.top = '0'
testDiv.style.position = 'absolute'
testDiv.style.top = '0'
boxDiv.appendChild(ref)
boxDiv.appendChild(testDiv)
body.appendChild(boxDiv)
}
