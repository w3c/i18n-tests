function showAssertion () {
    document.getElementById('assertion').innerHTML='Assertion: '+document.querySelector('meta[name=assert]').content
    }

function showLinks (path) {
    var out = ''
    
    // do spec links
    var links = document.querySelectorAll('link[rel=help]')
    for (var i=0;i<links.length;i++) {
        if (i>0) out += ' • '
        out += `<a target="_blank" href="${ links[i].href }">Spec link</a>`
        }
    
    // do results links
    var links = document.querySelectorAll('link[rel=prev]')
    if (out != '' && links.length > 0) out += ' • '
    for (var i=0;i<links.length;i++) {
        if (i>0) out += ' • '
        out += `<a target="_blank" href="${ links[i].href }">Results link</a>`
        }
    
    // do test home link
    var links = document.querySelectorAll('link[rel=top]')
    if (out != '' && links.length > 0) out += ' • '
    if (links.length > 0) out += `<a target="_blank" href="${ links[0].href }">Test home</a>`

    document.getElementById('links').innerHTML = `Links: ${ out }`
    }



function addToInfo (path) {
    showAssertion()
    //showHelpLinks() //showResultsPage(document.getElementById('resultsPage'))
    showLinks(path)
    }