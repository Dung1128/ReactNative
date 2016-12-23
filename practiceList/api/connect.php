<?php
$host='mysql.hostinger.vn';
$name='u128770533_sv'; //user name dang nhap database
$pass='1234567890'; //mat khau dang nhap vao database
$database='u128770533_qlsv'; //ten database dung

$conn=mysqli_connect($host,$name,$pass,$database) or die("false");
// mysql_select_db($database,$conn) or die("khong lay dc CSDL");  
date_default_timezone_set('Asia/Ho_Chi_Minh');
mysqli_query($conn,"SET NAMES 'UTF8'");
?>