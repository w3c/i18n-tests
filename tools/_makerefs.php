<?php
function DOMinnerHTML($element)
{
    $innerHTML = "";
    $children = $element->childNodes;
    foreach ($children as $child)
    {
        $tmp_dom = new DOMDocument();
        $tmp_dom->appendChild($tmp_dom->importNode($child, true));
        $innerHTML.=trim($tmp_dom->saveHTML());
    }
    return $innerHTML;
}



$batch = 'text-align';
# GET A LIST OF THE TESTS
$fp = fopen( '_reflist.txt', "r") or die("Couldn't open $batch");
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

libxml_use_internal_errors(false);
$doc = new DOMDocument();

$base = '../';
for ($i=0;$i<count($tests);$i++) {
	echo '<h2>'.$base.$tests[$i]."</h2>\n";
	$out = '';
	$doc->loadHTMLFile($base.'/'.$tests[$i]);
	$out .= "<!doctype html>\n<html>\n<head>\n<meta charset=\"utf-8\"/>\n";
	$out .= "<title>".$doc->getElementsByTagName('title')->item(0)->nodeValue."</title>\n";
	if ($doc->getElementsByTagName('style') != null) { 
		$styles = $doc->getElementsByTagName('style');
		for ($n=0;$n<count($styles);$n++) {
			$out .= "<style type=\"text/css\">".$doc->getElementsByTagName('style')->item($j)->nodeValue."</style>\n";
			}
		}
	$out .= "</head>\n<body>\n";
	$divs = $doc->getElementsByTagName('div');
	foreach ($divs as $div) {
		//$out .= $div->nodeValue;
	
		if ($div->getAttribute('id') == 'instructions') { $out .= "<div id='instructions'>".DOMinnerHTML($div)."</div>\n"; }
		if ($div->getAttribute('class') == 'ref') { $out .= "<div class=\"ref\">".DOMinnerHTML($div)."</div>\n<div class=\"ref\">".DOMinnerHTML($div)."</div>\n"; }
		}
	$out .= "</body>\n</html>\n";
	echo htmlspecialchars($out);

	$filename = $tests[$i];
	echo "&bull;".$filename; 
	$parts = explode('/', $filename);
	$filename = $parts[count($parts)-1];
	echo "&bull;".$filename;
	$parts = explode('.', $filename);
	$filename = $parts[0];
	echo "&bull;".$filename;
	$numbytes = file_put_contents( 'refs/'.$filename.'-ref.html', $out);
	chmod('refs/'.$filename.'-ref.html', 0777);
	}


?>
<!DOCTYPE html>
<html  lang="en" >
<head>
<meta charset="utf-8"/>
<title>reftest creator</title>
<link rel="stylesheet" type="text/css" href="./runstyle.css">
<style type='text/css'>
.test div { width: 50px; }
body { height: 100%; }
</style>
</head>
<body>




</body>
</html>


