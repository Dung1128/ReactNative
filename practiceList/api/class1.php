<?php
	header("Content-type: application/json");
	require('connect.php');
	if(isset($_POST['id']))
	{
		$id = $_POST['id'];
		$sql = "select * from tbl_Class where id_Class = '".$id."'";
		$checkLogin = mysqli_query($conn,$sql);
		if(mysqli_num_rows($checkLogin)>0)
		{
			$resultArray = mysqli_fetch_array($checkLogin, MYSQL_ASSOC);
			$dataResultApi['code'] = 0;
			$dataResultApi['message'] = "Login is success!";
			$dataResultApi['result'] = $resultArray;
			echo json_encode($dataResultApi, JSON_NUMERIC_CHECK);
			exit();
		}
		else
		{
			$dataResultApi['code'] = 1;
			$dataResultApi['message'] = "Username or Password is wrong!";
			echo json_encode($dataResultApi);
		}
	}else{
		$dataResultApi['code']=1;
		$dataResultApi['message']="This account does not exist!";
		echo json_encode($dataResultApi);
	}
?>
