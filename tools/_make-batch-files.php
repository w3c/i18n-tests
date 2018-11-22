<?php

// create a backup file for the batch, if needed
$iteration = '';
if (file_exists("../batches/".$_GET['batch']."-batch.txt")) {
	if (file_exists("../batches/".$_GET['batch']."-batch-backup.txt")) {
		$iteration = 1;
		while (file_exists("../batches/".$_GET['batch']."-batch-backup".strval($iteration).".txt")) {
			$iteration++;
			}
		}
	$backedup = false;
	$backedup = rename("../batches/".$_GET['batch']."-batch.txt", "../batches/".$_GET['batch']."-batch-backup".strval($iteration).".txt");
	if ($backedup) echo "Old batch file backed up.<br>";
	}

// create a backup file for the data, if needed
$iteration = '';
if (file_exists("../batches/".$_GET['batch']."-data.js")) {
	if (file_exists("../batches/".$_GET['batch']."-data-backup.js")) {
		$iteration = 1;
		while (file_exists("../batches/".$_GET['batch']."-data-backup".strval($iteration).".js")) {
			$iteration++;
			}
		}
	$backedup = false;
	$backedup = rename("../batches/".$_GET['batch']."-data.js", "../batches/".$_GET['batch']."-data-backup".strval($iteration).".js");
	if ($backedup) echo "Old data file backed up.<br>";
	}

// write new (empty) batch file
$numbytes = file_put_contents( '../batches/'.$_GET['batch'].'-batch.txt', "add_list_here");
chmod("../batches/".$_GET['batch'].'-batch.txt', 0777);

// write new data file
$output = "var testresults = {\n}";

$numbytes = file_put_contents( '../batches/'.$_GET['batch'].'-data.js', "$output");
chmod("../batches/".$_GET['batch'].'-data.js', 0777);

// give feedback
echo "<p style='color:#bbb;'>".$_GET['batch'].".txt file and ".$_GET['batch']."-data.js created.<br/><br/>$mainFilesMsg<br/><br/>Hit the back button to continue...</p>";

?>