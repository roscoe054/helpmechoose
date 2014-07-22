<?php
	include("conn.php");
	$arr = array($_POST['centerName'], $_POST['canteen']);
	$canterName = $arr[0];
	$canteen = json_decode($arr[1]);
	$lenCanteen = count($canteen);

	$result = 1;

	for ($i=0; $i<$lenCanteen; $i++){
		$sql = "INSERT INTO canteen (id, canteen, center) VALUES ('', '".$canteen[$i]."', '".$canterName."')";
		$result *= mysql_query($sql);

	}

	if ($result)
		echo "SUCCESS";
	else
		echo "ERROR";

	mysql_close($conn);
?>