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
<script id="datascript" src=<?php echo '"../results/'.$_GET['data'].'-data/data.js"'; ?>></script>
<script src="_newresults.js"></script>
<script>var datacheck = <?php echo '"'.$_GET['data'].'"'; ?></script>
</head>
<body>

<?php
// create a backup file
$iteration = '';
if (file_exists("../results/".$_GET['data']."-data/data.js")) {
	if (file_exists("../results/".$_GET['data']."-data/data-backup.js")) {
		$iteration = 1;
		while (file_exists("../results/".$_GET['data']."-data/data-backup".strval($iteration).".js")) {
			$iteration++;
			}
		}
	$backedup = false;
	$backedup = copy("../results/".$_GET['data']."-data/data.js", "../results/".$_GET['data']."-data/data-backup".strval($iteration).".js");
	if ($backedup) echo "Old file backed up.<br>";
	}

?>

<p>This app merges new results from tests into existing results</p>
<p>Overwrite the contents of the -data.js file with the output and save</p>
<textarea id="testdetail" style="width: 80%; height: 600px;"></textarea>

<script>
if (datacheck == '') { alert('No data file path !') } else { merge(); dump(); }
</script>
</body>
</html>


