function completeTest (sep) {
var boxDiv = document.createElement('div')
boxDiv.style.position = 'relative'
var ols = document.querySelectorAll('ol')
for (let i=0;i<ols.length;i++) ols[i].style.padding = '0'
var testDiv = document.querySelector('.test')
var listItems = testDiv.querySelectorAll('li')
var body = document.querySelector('body')
var ref = document.createElement('div')
var ol = document.createElement('ol')
ol.style.margin='0'
ol.style.padding = '0'
for (let i=0;i<listItems.length;i++) {
	if (i<2) {
		var refSubdiv = document.createElement('div')
		refSubdiv.appendChild(document.createTextNode(listItems[i].textContent+sep))
		refSubdiv.style.lineHeight = '40px'
		refSubdiv.style.fontSize = '35px'
		refSubdiv.style.color = 'red'
		refSubdiv.style.zIndex = '-100'
		ref.appendChild(refSubdiv)
		}
		
	if (i<2) {
	var test = document.createElement('li')	
	test.textContent = ''
		span = document.createElement('span')
		span.style.backgroundColor = '#ccc'
		span.style.color = '#ccc'
		span.textContent = '|'
		test.appendChild(span)
	test.style.listStylePosition = 'inside'
	test.style.margin = '0'
	test.style.padding = '0'
	test.style.lineHeight = '40px'
	test.style.color = 'black'
	test.style.fontSize = '35px'
	test.style.zIndex = '100'
	ol.appendChild(test)
	}
	listItems[i].style.display = 'none'
	}
ref.style.position = 'absolute'
ref.style.top = '0'
testDiv.appendChild(ol)
testDiv.style.position = 'absolute'
testDiv.style.top = '0'
boxDiv.appendChild(ref)
boxDiv.appendChild(testDiv)
body.appendChild(boxDiv)
}
