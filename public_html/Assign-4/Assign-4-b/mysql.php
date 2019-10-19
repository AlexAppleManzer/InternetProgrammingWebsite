<?php
$config = parse_ini_file('/home/amanzer/public_html/Assign-4B/config.ini');
$resid=MySQLi_Connect($config['servername'],$config['username'],$config['password'],$config['dbname']);

?>
