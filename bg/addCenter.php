<?php
	include("conn.php");
	$arr = array($_POST['centerName'], $_POST['province'], $_POST['city'], $_POST['district']);

	$centerName = $arr[0];
	$province = $arr[1];
	$city = $arr[2];
	$district = $arr[3];
	
	$sql = "INSERT INTO regional_center (id, name, province, city, district) VALUES ('', '".$centerName."', '".$province."', '".$city."', '".$district."')";

	$result = mysql_query($sql);
	if ($result)
		echo "SUCCESS";
	else
		echo "ERROR";

	mysql_close($conn);
?>