function showAssertion () {
    document.getElementById('assertion').innerHTML='Assertion: '+document.querySelector('meta[name=assert]').content
    }

function showHelpLinks () {
    out = 'Links: '
    var links = document.querySelectorAll('link[rel=help]')
    for (var i=0;i<links.length;i++) {
        if (i>0) out += ', '
        out += `<a target="_blank" href="${ links[i].href }">${ links[0].href }</a>`
        document.getElementById('helpLinks').innerHTML = out
        }
    }



function addToInfo () {
    showAssertion()
    showHelpLinks()
    }