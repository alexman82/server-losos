<?php
error_reporting(E_ALL & ~E_NOTICE);
$dblocation = 'localhost';
$dbname = 'losos';
$dbuser = 'root';
$dbpass = 'root';
$dbcn = mysqli_connect($dblocation, $dbuser, $dbpass, $dbname);
if (!$dbcn) {
	exit('Error server');
}
