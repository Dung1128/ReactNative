<?php
	header("Content-type: application/json");
    require 'connect.php';
    if(isset($_POST['id_Class'])){

    	$id = $_POST['id_Class'];
    	$selectSql = "select * from tbl_Student where id_Class = '".$id."'";
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
    }
    else{
    	$dataResultApi['code'] = 1;
		$dataResultApi['message']="please try again!";
		echo json_encode($dataResultApi);
    }
	
		
?>