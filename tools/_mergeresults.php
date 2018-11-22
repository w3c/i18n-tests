<!DOCTYPE html>
<html  lang="en" >
<head>
<meta charset="utf-8"/>
<title>merge results app</title>
<!-- this app merges new results from tests into existing results 
	copy the results-data.js file from the appropriate directory to the repository directory
    add the new results to the newresults.js file
    run this page
    move the results-data.js file back to the right directory
    -->
<script src="_mergeresults.js"></script>
<script id="datascript" src=<?php echo '"../batches/'.$_GET['data'].'-data.js"'; ?>></script>
<script>var datacheck = <?php echo '"'.$_GET['data'].'"'; ?></script>
</head>
<body>

<?php
// create a backup file
$iteration = '';
if (file_exists("../batches/".$_GET['data']."-data.js")) {
	if (file_exists("../batches/".$_GET['data']."-data-backup.js")) {
		$iteration = 1;
		while (file_exists("../batches/".$_GET['data']."-data-backup".strval($iteration).".js")) {
			$iteration++;
			}
		}
	$backedup = false;
	$backedup = copy("../batches/".$_GET['data']."-data.js", "../batches/".$_GET['data']."-data-backup".strval($iteration).".js");
	if ($backedup) echo "Old file backed up.<br>";
	}

?>

<p>This app merges new results from tests into existing results.</p>
<p>Drop the new results here.</p>
<textarea id="newresults" style="width: 80%; height: 400px;"></textarea>
<p>Click this button to produce a merge of new and old results: <button onClick="newresults=convert();merge(); dump();">Do it</button></p>
<textarea id="testdetail" style="width: 80%; height: 600px;"></textarea>
<p>Open the <code>-data.js</code> file in the <code>batches</code> folder, and overwrite the contents of the file with the output above, and save</p>

</body>
</html>


