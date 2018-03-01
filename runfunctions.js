testresults = new Array();
cTestname = 0;
cTitle = 1;
cFlags = 2;
cRef = 3;
cAssert = 4;
_browsertype = '';


function setTest (newptr, base) {
	// sets up the runner page to display a test
	// newptr, integer, points into tests array index
	
	ptr = newptr;
	document.getElementById('selector').value = ptr;
	
	document.getElementById('testframe').src = base+'/'+tests[newptr][cTestname];
	document.getElementById('title').innerHTML = tests[newptr][cTitle];
	var flags = tests[newptr][cFlags].split(' ');
	var flagoutput = '';
	for (var f=0;f<flags.length;f++) { 
		switch (flags[f]) {
			case 'http': flagoutput += '<li>HTTP headers.</li>'; break;
			case 'dom': flagoutput += '<li>JavaScript and the DOM.</li>'; break;
			case 'font': flagoutput += '<li>A specific font.</li>'; break;
			case ':lang': flagoutput += '<li>CSS :lang support.</li>'; break;
			case 'lang|=': flagoutput += '<li>CSS lang|= support.</li>'; break;
			case 'start': flagoutput += '<li>Support for start attribute.</li>'; break;
			}
		}
	if (flagoutput != '') {
		document.getElementById('prerequisites').innerHTML = 'Requires: <ul>'+flagoutput+'</ul>';
		document.getElementById('prerequisites').style.borderTopColor = 'orange';
		document.getElementById('prerequisites').style.borderBottomColor = 'orange';
		}
	else { 
		document.getElementById('prerequisites').innerHTML = ''; 
		document.getElementById('prerequisites').style.borderTopColor = 'white';
		document.getElementById('prerequisites').style.borderBottomColor = 'white';
		}
		
	document.getElementById('speclink').href = tests[newptr][cRef];
	
	document.getElementById('assertion').innerHTML = tests[newptr][cAssert	];
	
	//document.getElementById('detailedresults').href = 'http://w3c-test.org/framework/details/'+base+'/'+tests[newptr][0];
	}



function adddata (testname, result) { 
	var currentdate = new Date(); 
	var datetime = currentdate.getDate() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	
	if (testresults[testname] ) {
		testresults[testname][testresults[testname].length] = { browser: _browsertype, status: result, ua: navigator.userAgent, date: datetime };
		}
	else { 
		testresults[testname] = new Array();
		testresults[testname][testresults[testname].length] = { browser: _browsertype, status: result, ua: navigator.userAgent, date: datetime };
		}
	}


function setUpScoring () {
	document.getElementById('scoring').style.display = "block";
	document.getElementById('resultsButton').style.display = "block";
	}
	
function dump () { 
	var out = 'var newresults = {\n\n'; tfirst = true;
	for (var t in testresults) {
		if (! tfirst) { out += ',\n'; } else { out += '\n'; tfirst = false; }
		out += "'"+t+"': [";
		rfirst = true; 
		for (r=0;r<testresults[t].length;r++) {
			if (! rfirst) { out += ', '; } else { rfirst = false; }
			out += '\n\t{';
				ifirst = true; 
				for (i in testresults[t][r]) {
					if (! ifirst) { out += ', '; } else { ifirst = false; }
					out += i+':' + "'"+testresults[t][r][i]+"'";
					}
			out += ' }';
			}
		out += "\n\t]";
		}
	document.getElementById('testdetail').value = out+'\n}';
	document.getElementById('testdetail').style.display = 'block';
	document.getElementById('testdetail').focus();
	document.getElementById('testdetail').select();
	}
