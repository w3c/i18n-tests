<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>file lister</title>
</head>
<body>
<?php

if (! isset($_GET['dir'])) { exit; }
$directory = $_GET['dir'];
foreach (new DirectoryIterator('../'.$directory) as $file) {
	echo '<p>'.htmlentities($file)."</p>\n";
	}


?>
</body>
</html>