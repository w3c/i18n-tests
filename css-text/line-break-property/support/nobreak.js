function createTests (charlist, body, allowed) {

var lines = charlist.split('\n')
var out = '<div id="log"></div>\n'
if (allowed) var expectation = ''
else expectation = "NOT"

// create the HTML
if (allowed) out += '<h2>Test output</h2><p>Test passes if the FIRST character on the 2nd line of the orange box is the named character (as shown by the lighter reference text).</p>\n'
else out += '<h2>Test output</h2><p>Test passes if the SECOND character on the 2nd line of the orange box is the named character (as shown by the lighter reference text).</p>\n'
for (var i=0;i<lines.length;i++) {
	// get the data
	var firstSpace = lines[i].indexOf(' ')
	var hex = lines[i].substr(0,firstSpace)
	var name = lines[i].substr(firstSpace)
	// make a test
	out +=  '<div class="wrapper"><div>'+hex+' '+name+'</div>' +
	'<div class="test" id="test'+i+'" lang="ja">文文文文文文&#x'+hex+';字<span id="testSpan'+i+'">字</span></div>' 
	if (allowed) out +=  '<div class="ref" id="ref'+i+'" lang="ja">文文文文文文<br/>&#x'+hex+';字<span id="refSpan'+i+'">字</span></div>'
	else out +=  '<div class="ref" id="ref'+i+'" lang="ja">文文文文文<br/>文&#x'+hex+';字<span id="refSpan'+i+'">字</span></div>'
	out +=  '</div>'
	}
// create a section to list failures
out += '<h2>List of failures</h2><p id="failures">none</p>'
document.querySelector('body').innerHTML = out

// make a list of failures
var summary = ''
for (i=0;i<lines.length;i++) {
    if (document.getElementById('testSpan'+i).offsetLeft !== document.getElementById('refSpan'+i).offsetLeft)  {
        if (summary !== '') summary += ', '
        summary += 'U+'+document.getElementById('test'+i).parentNode.firstChild.textContent
        }
    }

// run the test framework
 for (i=0;i<lines.length;i++) {
   test(function() {
        assert_true(document.getElementById('testSpan'+i).offsetLeft === document.getElementById('refSpan'+i).offsetLeft);
        }, lines[i]+' may '+expectation+' appear at line start');
   }

// list unsuccessful tests
if (summary != '') document.getElementById('failures').textContent = summary
}