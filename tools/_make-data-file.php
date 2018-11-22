<?php

// read in template
$template = file_get_contents('results_template.en.html');


// make substitutions in template
$template = str_replace("SUB§FILENAME", $_GET['fnameShadow_results'], $template);
$template = str_replace("SUB§BASE", $_GET['baseShadow_results'], $template);
$template = str_replace("SUB§BATCH", $_GET['batchShadow_results'], $template);
$template = str_replace("SUB§DATE", date('Y-m-d'), $template);
$template = str_replace("SUB§TIME", date('H:i'), $template);



// read in batch file
$fp = fopen( '../batches/'.$_GET['batchShadow_results'].'-batch.txt', "r") or die("Couldn't open $batch");
// make an array of the lines in the batch file
$tests = array();
$ptr = 0;
while (! feof($fp)) {
    $line = trim(fgets( $fp, 2048 ));
    if ($line != '' && $line[0] != '#') { 
        $tests[$ptr] = $line; 
        $ptr++;
        }
    }
// format test names for use in results file
for ($i=0;$i<count($tests);$i++) {
    $tests[$i] = "'".$tests[$i]."',";
    }
// convert array to string
$testNameString = "<!-- Pre-formatted list of tests -->\n";
for ($i=0;$i<count($tests);$i++) {
    $testNameString .= "\t\t".$tests[$i]."\n";
    }
// add testNameString to template
$template = str_replace('<!-- List of tests here -->', $testNameString, $template);




// write new file
$output = "var testresults = {\n}";

// create .var file content
$varoutput = "URI: ".$_GET['fnameShadow_results']."\n\n";
$varoutput .= "Content-language: en\nContent-type: text/html\nURI: ".$_GET['fnameShadow_results'].".en.html\n\n";
$varoutput .= "Content-type: text/html\nURI: ".$_GET['fnameShadow_results'].".en.html\n";

// create translations.js file content
$vartrans = "var trans = { }\n\n";
$vartrans .= "trans.versions = ['en']\n\n";
$vartrans .= "trans.outofdatetranslations = []\n\n";
$vartrans .= "trans.updatedtranslations = []\n\n";
$vartrans .= "trans.unlinkedtranslations = []\n";


if (file_exists("../results/".$_GET['fnameShadow_results'].".en.html")) {
	$mainFilesMsg = "<span style='color:red;'>Results file already exists. Creation aborted.</span>";
	}
else {
	mkdir('../results/'.$_GET['fnameShadow_results'].'-data',0777);
	chmod("../results/".$_GET['fnameShadow_results'].'-data', 0777);
	#copy("results_template.en.html", "../results/".$_GET['fnameShadow_results'].".en.html");
	#chmod("../results/".$_GET['fnameShadow_results'].".en.html", 0777);

	$numbytes = file_put_contents( '../results/'.$_GET['fnameShadow_results'].'-data/translation.js', "$vartrans");
	chmod("../results/".$_GET['fnameShadow_results'].'-data/translation.js', 0777);

	$numbytes = file_put_contents( '../results/'.$_GET['fnameShadow_results'].'.var', "$varoutput");
	chmod("../results/".$_GET['fnameShadow_results'].'.var', 0777);

	$numbytes = file_put_contents( '../results/'.$_GET['fnameShadow_results'].'.en.html', "$template");
	chmod("../results/".$_GET['fnameShadow_results'].'.en.html', 0777);

	$mainFilesMsg = "Created results and .var page.";
    }

// give feedback
echo "<p style='color:#bbb;'>".$_GET['fnameShadow_results']." files created.<br/><br/>$mainFilesMsg<br/><br/>Hit the back button to continue...</p>";

?>