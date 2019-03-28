<?php
# this file creates a .json file in the batches directory
# the .json filename is the same as a related xxx-batch.txt file
# the xxx is passed to this php script as 'base'
# this script looks at each test file in the batch list, and sucks out information which it arranges in json format
# that information is used by the i18n test framework and results pages

// create a backup file
$iteration = '';
if (file_exists("../batches/".$_GET['batch'].".json")) {
	if (file_exists("../batches/".$_GET['batch']."-backup.json")) {
		$iteration = 1;
		while (file_exists("../batches/".$_GET['batch']."-backup".strval($iteration).".json")) {
			$iteration++;
			}
		}
	$backedup = false;
	$backedup = rename("../batches/".$_GET['batch'].".json", "../batches/".$_GET['batch']."-backup".strval($iteration).".json");
	if ($backedup) echo "Old file backed up.<br>";
	}
else { echo 'No file found: '."../batches/".$_GET['batch'].".json"; }


define("testname", 0);
define("title", 2);
define("flags", 3);
define("url", 4);
define("assertion", 7);
if (isset($_GET['base'])) {  
	$base = $_GET['base'];
	}  
if (isset($_GET['batch'])) {  
	$batch = $_GET['batch'];
	$fp = fopen( '../batches/'.$batch.'-batch.txt', "r") or die("Couldn't open $batch");
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
	}  
if (isset($_GET['test'])) {
	$testparam = $_GET['test'];
	if (	preg_match("/\.\./", $testparam)) {
		echo "Bad test name."; exit; 
		}
	$firsttest = '';
	for ($t=0;$t<count($tests);$t++) {
		if ($tests[$t] == $testparam) { $firsttest = $t; break; }
		} 
	if ($firsttest === '') { echo 'Bad test name.'; exit; }
	}
else { $firsttest = 0; }


function getData ($t, $file, $base) {
	// start with file name
	$output = "tests[".$t."]=[\"".$file."\",";

	$filestring = file_get_contents("../$base/$file");
	
	if ($filestring) {
		// get title
		$success = preg_match("/<title>([^<]*)<\/title>/i", $filestring, $titletag);
		if ($success) { $output .= "\"".htmlspecialchars($titletag[1], ENT_QUOTES)."\","; }
		else { $output .= "\"\","; }
		
		// get flags
		//$success = preg_match("/<meta[\s]+name=['|\"]flags['|\"] content=['|\"]([^']*)['|\"]>/i", $filestring, $titletag);
		$success = preg_match("/<meta[\s]+name=['|\"]flags['|\"] content='([^']*)'>/i", $filestring, $titletag);
		if ($success == 0) { $success = preg_match("/<meta[\s]+name=['|\"]flags['|\"] content=\"([^\"]*)\">/i", $filestring, $titletag); }
		if ($success) { $output .= "'".$titletag[1]."',"; }
		else { $output .= "\"\","; }
		
		// get help url
		//$success = preg_match("/<link[\s]+rel=['|\"]help['|\"][\s]+href=['|\"]([^']*)['|\"]>/i", $filestring, $titletag);
		$success = preg_match("/<link[\s]+rel=['|\"]help['|\"][\s]+href='([^']*)'>/i", $filestring, $titletag);
		if ($success == 0) { $success =preg_match("/<link[\s]+rel=['|\"]help['|\"][\s]+href=\"([^\"]*)\">/i", $filestring, $titletag);  }
		if ($success) { $output .= "'".$titletag[1]."',"; }
		else { $output .= "\"\","; }
		
		// get assertion
		//preg_match("/<meta[\s]+name=['|\"]assert['|\"][\s]+content=['|\"]([^\"]*)['|\"]>/i", $filestring, $titletag);
		$success = preg_match("/<meta[\s]+name=['|\"]assert['|\"][\s]+(id=['|\"]assert['|\"][\s])?content='([^\']*)'[\s]*[\/]?>/i", $filestring, $titletag);
		if ($success == 0) { $success = preg_match("/<meta[\s]+name=['|\"]assert['|\"][\s]+(id=['|\"]assert['|\"][\s])?content=\"([^\"]*)\"[\s]*[\/]?>/i", $filestring, $titletag); }
		if ($success) { $foundItem = str_replace("\n",' ', "\"".htmlspecialchars($titletag[2], ENT_QUOTES)."\"]\n"); $output .= $foundItem; }
		else { $output .= "\"\"]\n"; }
		
		}
	else { print "Could not open ".$file."\n"; }
	return $output;
	}
	

?>
<!DOCTYPE html>
<html  lang="en" >
<head>
<meta charset="utf-8"/>
<title>JSON file generator</title>
<link rel="stylesheet" type="text/css" href="./runstyle.css">
<script src="runfunctions.js"></script>
<script>
var base = '<?php echo $base; ?>';
var ptr = 0; // current index in tests array
var tests = new Array();
</script>
</head>
<body>
<?php
$out = "tests = []\n";
for ($t=0; $t<count($tests); $t++) {
	$output = getData($t, $tests[$t], $base); 
	$output .= "\n";
    $out .= $output."\n";
	}

# work out how many levels to jump up for end file by looking at base
$levels = explode('/',$base);
$backuppath = '';
for ($i=0;$i<count($levels);$i++) { $backuppath .= '../'; }

$out .= "tests[".$t."]=['".$backuppath."testend','','','','']\n";

	$numbytes = file_put_contents( '../batches/'.$_GET['batch'].'.json', "$out");
	chmod("../batches/".$_GET['batch'].'.json', 0777);

echo '<textarea style="width:100%;height:1000px;">'.$out.'</textarea>';

?>
</body>
</html>


