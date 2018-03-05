<?php

// create a backup file
$iteration = '';
if (file_exists("../results/".$_GET['topic']."-data/data.js")) {
	if (file_exists("../results/".$_GET['topic']."-data/data-backup.js")) {
		$iteration = 1;
		while (file_exists("../results/".$_GET['topic']."-data/data-backup".strval($iteration).".js")) {
			$iteration++;
			}
		}
	$backedup = false;
	$backedup = rename("../results/".$_GET['topic']."-data/data.js", "../results/".$_GET['topic']."-data/data-backup".strval($iteration).".js");
	if ($backedup) echo "Old file backed up.<br>";
	}

// write new file
$output = "var testresults = {\n}";

$varoutput = "URI: ".$_GET['topic']."\n\n";
$varoutput .= "Content-language: en\nContent-type: text/html\nURI: ".$_GET['topic'].".en.html\n\n";
$varoutput .= "Content-type: text/html\nURI: ".$_GET['topic'].".en.html\n";


$vartrans = "var trans = { }\n\n";
$vartrans .= "trans.versions = ['en']\n\n";
$vartrans .= "trans.outofdatetranslations = []\n\n";
$vartrans .= "trans.updatedtranslations = []\n\n";
$vartrans .= "trans.unlinkedtranslations = []\n";


if (file_exists("../results/".$_GET['topic'].".en.html")) {
	$mainFilesMsg = "<span style='color:red;'>Results file already exists. Creation aborted.</span>";
	}
else {
	mkdir('../results/'.$_GET['topic'].'-data',0777);
	chmod("../results/".$_GET['topic'].'-data', 0777);
	copy("results_template.en.html", "../results/".$_GET['topic'].".en.html");
	chmod("../results/".$_GET['topic'].".en.html", 0777);
	//copy("../results/xxx.var", "../results/".$_GET['topic'].".var");
	$mainFilesMsg = "Created results and .var page.";

	$numbytes = file_put_contents( '../results/'.$_GET['topic'].'-data/translation.js', "$vartrans");
	chmod("../results/".$_GET['topic'].'-data/translation.js', 0777);

	$numbytes = file_put_contents( '../results/'.$_GET['topic'].'-data/data.js', "$output");
	chmod("../results/".$_GET['topic'].'-data/data.js', 0777);

	$numbytes = file_put_contents( '../results/'.$_GET['topic'].'.var', "$varoutput");
	chmod("../results/".$_GET['topic'].'.var', 0777);
	}

// give feedback
echo "<p style='color:#bbb;'>".$_GET['topic']."-data/data.js created.<br/><br/>$mainFilesMsg<br/><br/>Hit the back button to continue...</p>";

?>