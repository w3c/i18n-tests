<!doctype html>
<head>
<meta charset="utf-8">
</head>

<body>
<?php

$base = '/Users/ishida/Sites/git/i18n-tests/'.$_GET['base'].'/';
echo '<p style="color:#aaa;">Base: '.$base."</p>";

$prefix = '';
if (isset($_GET['prefix']) && $_GET['prefix'] != '') { $prefix = $_GET['prefix'].'/'; }

#$fp = fopen( $_GET['batch'].'-batch.txt', "w") or die("Couldn't open $manifest");

foreach (new DirectoryIterator($base) as $file) {
	echo $prefix.$file."<br/>";
	}

echo "<div style='color:#aaa;margin-top: 3em;'><p>Copy the filenames you want from above into a new file called <code>BATCHNAME-batch.txt</code>, and rearrange if necessary.<br/><br/><strong>Then press the back key to continue...</strong></p></div>";
?>
</body>
</html>