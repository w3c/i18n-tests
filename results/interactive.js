var owner = 'w3c';

var sections = {}
var debug = true

var issues = []
var maxpages = 5

var totals=0
var counter=maxpages
			
function getAllData (repo, doc) {
	for (var p=1;p<maxpages+1;p++) fetchIssues(p, repo)
	var timer = setInterval(function() {
		if (counter === 0) {
			clearInterval(timer)
			if (debug) console.log('finished','Issue length:',issues.length, sections)

			// group issues by label, adding to the labels array
			for (var i=0; i<issues.length; i++) {
				if (issues[i].labels) {
					for (var l=0;l<issues[i].labels.length;l++) { // for each label in that issue
						if (issues[i].labels[l].name.startsWith('h2:')) {
							sLabelFound = issues[i].labels[l].name.replace(/^h2:/,'')
							if (sections[sLabelFound]) sections[sLabelFound].push(issues[i])
							else {
								sections[sLabelFound] = []
								sections[sLabelFound].push(issues[i])
								}
							if (debug) console.log(sLabelFound)
							}
						}
					}
				}
			buildDoc(repo, doc)
			}
		else if (debug) console.log(counter)
		}, 50)
	}

	
// Grab and present the issue list from GitHub
function fetchIssues(page, repo) {
	var request = new XMLHttpRequest();
	request.open('get','https://api.github.com/repos/w3c/'+repo+'/issues?per_page=100&page='+page)
	request.onload = function () {
			var temp = JSON.parse(request.responseText)
			for (var i=0;i<temp.length;i++) {
				issues.push(temp[i])
				}
		totals += issues.length;
		if (debug) console.log(issues.length,totals,page, counter)
		counter--
		}
	request.send();
	}
				


function buildDoc (repo, doc) {
	// incorporate the information in the database into the html document

	var docSections = document.querySelectorAll('.insertionpoint')
	for (var i=0;i<docSections.length;i++) {
		buildSection(sections[docSections[i].dataset.h2], docSections[i].id, 'h3:'+docSections[i].dataset.h3, doc, repo)
		}
	}





function buildSection (theData, sectionId, subsection, doc, repo) {

	if (! theData) return
	
	var out = '<table class="results"><thead><tr><th>link</th><th>assertion</th><th>Gecko</th><th>Blink</th><th>Webkit</th></tr></thead><tbody>'
	
	for (var i=0;i<theData.length;i++) {
		var labelSet = new Set([])

		// screen out issues that don't relate to the current gap-analysis document
		rightDoc = false
		for (var l=0;l<theData[i].labels.length;l++) { 
			if (theData[i].labels[l].name === doc) rightDoc = true
			}
							if (debug) console.log(theData[i].number,'rightDoc:',rightDoc)
		rightSubsection = false
		for (l=0;l<theData[i].labels.length;l++) { 
			if (theData[i].labels[l].name === subsection) rightSubsection = true
			}
							if (debug) console.log(subsection,'rightSubsection:',rightSubsection)
		
		if (rightDoc && rightSubsection) {

			// find priority labels
			for (l=0;l<theData[i].labels.length;l++) {
				labelSet.add(theData[i].labels[l].name)
				}
							if (debug) console.log('labelSet:',labelSet)
			
			
			out += '<tr><th class="side title"><a target="_blank" href="https://github.com/w3c/'+repo+'/issues/'+theData[i].number+'">#'+theData[i].number+'</a></th><th class="side assert">'+theData[i].title+'</th>'
			
			if (labelSet.has('r:GeckoPass')) out += '<td class="pass">pass</td>'
			else if (labelSet.has('r:GeckoFail')) out += '<td class="fail">fail</td>'
			else if (labelSet.has('r:GeckoPartial')) out += '<td class="partial">partial</td>'
			else if (labelSet.has('r:GeckoNA')) out += '<td class="skipped">n/a</td>'
			else if (labelSet.has('r:GeckoYes')) out += '<td class="yes">yes</td>'
			else if (labelSet.has('r:GeckoNo')) out += '<td class="no">no</td>'
			
			if (labelSet.has('r:BlinkPass')) out += '<td class="pass">pass</td>'
			else if (labelSet.has('r:BlinkFail')) out += '<td class="fail">fail</td>'
			else if (labelSet.has('r:BlinkPartial')) out += '<td class="partial">partial</td>'
			else if (labelSet.has('r:BlinkNA')) out += '<td class="skipped">n/a</td>'
			else if (labelSet.has('r:BlinkYes')) out += '<td class="yes">yes</td>'
			else if (labelSet.has('r:BlinkNo')) out += '<td class="no">no</td>'
			
			if (labelSet.has('r:WebkitPass')) out += '<td class="pass">pass</td>'
			else if (labelSet.has('r:WebkitFail')) out += '<td class="fail">fail</td>'
			else if (labelSet.has('r:WebkitPartial')) out += '<td class="partial">partial</td>'
			else if (labelSet.has('r:WebkitNA')) out += '<td class="skipped">n/a</td>'
			else if (labelSet.has('r:WebkitYes')) out += '<td class="yes">yes</td>'
			else if (labelSet.has('r:WebkitNo')) out += '<td class="no">no</td>'

			
			
			out += '</tr>'
			}
		}
	out += '<tbody><table>'
	document.getElementById(sectionId).innerHTML = out
	}










