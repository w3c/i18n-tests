function merge () { 
	//for (t=0;t<newresults.length;t++) {
	for (testname in newresults) {
		
		if (testresults[testname] ) {
			for (t=0;t<newresults[testname].length;t++) {
				testresults[testname][testresults[testname].length] = newresults[testname][t];
				}
			}
		else { 
			testresults[testname] = new Array();
			for (t=0;t<newresults[testname].length;t++) {
				testresults[testname][testresults[testname].length] = newresults[testname][t];
				}
			}
		
		}
	}



function dump () { 
	var out = 'var testresults = {\n\n'; tfirst = true;
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
