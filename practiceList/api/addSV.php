<?php
	header("Content-type: application/json");
    require 'connect.php';
	if(isset($_POST['sName'])){

    	if(isset($_POST['sEmail'])){

    		if(isset($_POST['sAddress'])){

    			$name = $_POST['sName'];
    			$email = $_POST['sEmail'];
    			$address = $_POST['sAddress'];

    			$sql="insert into tbl_Student (sName,sEmail,sAddress,id_Class) value ('".$name."','".$email."','".$address."','1')";
    			(int)$affected = mysqli_query($conn,$sql);
				if($affected == 1){
					$dataResultApi['code'] = 0;
					$dataResultApi['message'] = "add student is Success.!";
					echo json_encode($dataResultApi);
					exit();
				}
				else{
					$dataResultApi['code']=1;
					$dataResultApi['message']="Please try again.!";
					echo json_encode($dataResultApi);
				}
    		}
    		else{
				$dataResultApi['code']=1;
				$dataResultApi['message']="Please try again address.!";
				echo json_encode($dataResultApi);
			}
    	}
    	else{
			$dataResultApi['code']=1;
			$dataResultApi['message']="Please try again email.!";
			echo json_encode($dataResultApi);
		}
    }
    else{
		$dataResultApi['code']=1;
		$dataResultApi['message']="Please try again name.!";
		echo json_encode($dataResultApi);
	}

?>