<?php
	header("Content-type: application/json");
    require 'connect.php';
	$selectSql = "select * from tbl_Class";
	$resultObj = mysqli_query($conn,$selectSql);
	
	while($row = mysqli_fetch_array($resultObj, MYSQL_ASSOC))
	{
		$list[] = $row;
	}


    $dataResultApi['code']=0;
	$dataResultApi['message']="Success";
	$dataResultApi['result'] = $list;
	echo json_encode($dataResultApi);
	exit();
		
?>