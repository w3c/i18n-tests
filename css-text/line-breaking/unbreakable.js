function createTests (charlist, body) {
// creates HTML for a list of tests for characters that shouldn't break a long line
// and runs the tests, producing a list of failures

// make an array of the list of characters
var lines = charlist.split('\n')
var out = '<div id="log"></div>\n'

// create the HTML
out += '<h2>Test output</h2><p>Test passes if the line breaks.</p>\n'
for (var i=0;i<lines.length;i++) {
    // get the data
    var firstSpace = lines[i].indexOf(' ')
    var hex = lines[i].substr(0,firstSpace)
    var name = lines[i].substr(firstSpace)
    // make a test
    out +=  '<div><div>'+hex+' '+name+'</div><div id="test'+i+'" class="breakable">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&#x'+hex+';bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</div></div>'
    }
// create a section to list failures
out += '<h2>List of failures</h2><p id="failures">none</p>'
body.innerHTML = out

// run the test framework
 for (i=0;i<lines.length;i++) {
   test(function() {
        assert_true(document.getElementById('test'+i).offsetHeight > 35);
        }, lines[i]+' should allow a line break after');
   }

// list unsuccessful tests
var summary = ''
for (i=0;i<lines.length;i++) {
    if (document.getElementById('test'+i).offsetHeight < 35) {
        if (summary !== '') summary += ', '
        summary += 'U+'+document.getElementById('test'+i).parentNode.firstChild.textContent
        }
    }
if (summary != '') document.getElementById('failures').textContent = summary
}