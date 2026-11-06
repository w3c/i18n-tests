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


// The interactive tests render arbitrary HTML, including markup supplied via
// the ?text= URL parameter. Markup that arrives from a URL must not be able to
// run script on this origin, so scripts, event handler attributes and URLs
// with a script-bearing scheme are removed before the markup is inserted.
function sanitizeHTML (markup) {
const blockedElements = new Set(['applet', 'base', 'embed', 'frame', 'frameset', 'iframe', 'link', 'math', 'meta', 'noembed', 'noframes', 'noscript', 'object', 'plaintext', 'script', 'style', 'svg', 'template', 'title', 'xmp'])
const urlAttributes = new Set(['action', 'background', 'cite', 'data', 'dynsrc', 'formaction', 'href', 'longdesc', 'lowsrc', 'poster', 'src', 'xlink:href'])
const safeSchemes = new Set(['http', 'https', 'mailto', 'tel'])
const doc = new DOMParser().parseFromString(String(markup), 'text/html')
if (!doc.body) return document.createDocumentFragment() // e.g. a frameset document
const elements = Array.from(doc.body.querySelectorAll('*'))
for (const element of elements) {
    if (blockedElements.has(element.localName.toLowerCase())) {
        element.remove()
        continue
        }
    for (const attribute of Array.from(element.attributes)) {
        const name = attribute.name.toLowerCase()
        if (name.startsWith('on') || name === 'srcdoc' || name === 'srcset' || name === 'imagesrcset' || name === 'ping') {
            element.removeAttribute(attribute.name)
            continue
            }
        if (urlAttributes.has(name) && !isSafeURL(attribute.value, safeSchemes)) {
            element.removeAttribute(attribute.name)
            }
        }
    }
return doc.body
}


function isSafeURL (value, safeSchemes) {
// The URL parser ignores control characters and whitespace, so strip them
// too before looking for a scheme (e.g. "java\tscript:").
const url = value.replace(/[\u0000-\u0020\u007f]/g, '').toLowerCase()
const scheme = url.match(/^([a-z][a-z0-9+.-]*):/)
return !scheme || safeSchemes.has(scheme[1])
}


function setText (value) {
const clean = sanitizeHTML(value)
const ids = ['test', 'normal', 'textarea', 'html']
for (const id of ids) {
    const target = document.getElementById(id)
    if (!target) continue
    const fragment = document.createDocumentFragment()
    for (const node of Array.from(clean.childNodes)) fragment.appendChild(document.importNode(node, true))
    while (target.firstChild) target.removeChild(target.firstChild)
    target.appendChild(fragment)
    }
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



