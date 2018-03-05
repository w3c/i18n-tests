<?php

$base = '../'.$_GET['base'].'/';

$fp = fopen( '../batches/'.$_GET['batch'].'-batch.txt', "r") or die("Couldn't open $manifest");
$filelist = array();
$ptr = 0;
while (! feof($fp)) {
	$line = trim(fgets( $fp, 1024 ));
	if ($line != '' && $line[0] != '#') {
		$filelist[$ptr] = $line;
		$ptr++;
		}
	}

$output = "var tests = {\n";


function getData ($file, $type, $status) {
	GLOBAL $base;
	
	$output = "\t'".$file."': [\n";

	$filestring = file_get_contents("$base$file");
	
	if ($filestring) {
		// get title
		$success = preg_match("/<title>([^<]*)<\/title>/i", $filestring, $titletag);
		if ($success) { $output .= "\t'".$titletag[1]."',\n"; }
		else { $output .= "\t'',\n"; }
		
		
		// get flags
		//$output .= "\t"; 
		
		// get help url
		//$success = preg_match("/<link[\s]+rel=['|\"]help['|\"][\s]+href=['|\"]([^']*)['|\"]>/i", $filestring, $titletag);
		$success = preg_match("/<link[\s]+rel=['|\"]help['|\"][\s]+href='([^']*)'>/i", $filestring, $titletag);
		if ($success == 0) { $success =preg_match("/<link[\s]+rel=['|\"]help['|\"][\s]+href=\"([^\"]*)\">/i", $filestring, $titletag);  }
		if ($success) { $output .= "\t'".$titletag[1]."',\n"; }
		else { $output .= "\t'',\n"; }
		
		// get author
		//$output .= "\t"; 

		// get assertion
		//preg_match("/<meta[\s]+name=['|\"]assert['|\"][\s]+content=['|\"]([^\"]*)['|\"]>/i", $filestring, $titletag);
		$success = preg_match("/<meta[\s]+name=['|\"]assert['|\"][\s]+content='([^\']*)'[\s]*[\/]?>/i", $filestring, $titletag);
		if ($success == 0) { $success = preg_match("/<meta[\s]+name=['|\"]assert['|\"][\s]+content=\"([^\"]*)\"[\s]*[\/]?>/i", $filestring, $titletag); }
		if ($success) { $output .= "\t'".$titletag[1]."',\n"; }
		else { $output .= "\t''\n"; }

		$output .= "\t],\n";
		}
	else { print "Could not open ".$filename."\n"; }
	return $output;
	}
	
$output .= "";  $type=0; $status=0;
foreach ($filelist as $file) {
	if ($file == 'the-input-byte-stream-003') { $output .= 'the-input-byte-stream-003		UTF-16LE BOM	http	http://www.w3.org/TR/html5/syntax.html#the-input-byte-stream	DUMMY	Richard Ishida mailto:ishida@w3.org	A page with no encoding declarations, but with a UTF-16 little-endian BOM will be recognized as UTF-16.'; }
	else if ($file == 'the-input-byte-stream-004') { $output .= 'the-input-byte-stream-004		UTF-16BE BOM	http	http://www.w3.org/TR/html5/syntax.html#the-input-byte-stream	DUMMY	Richard Ishida mailto:ishida@w3.org	A page with no encoding declarations, but with a UTF-16 big-endian BOM will be recognized as UTF-16.'; }
	else { $output .= getData($file, $type, $status); }
	}
$output .= "}\n";



$numbytes = file_put_contents( '../results/'.$_GET['filename'].'-data/manifest.js', "$output");

echo "<pre>$output</pre>";

?>