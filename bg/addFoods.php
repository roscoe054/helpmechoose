<?php
	include("conn.php");
	$arr = array($_POST['centerName'], $_POST['canteen'], $_POST['foods']);
	$canterName = $arr[0];
	$canteen = $arr[1];
	$foods = json_decode($arr[2]);
	$lenFoods = count($foods);

	$result = 1;

	for ($i=0; $i<$lenFoods; $i++){
		$sql = "INSERT INTO menu (id, food, canteen, place) VALUES ('', '".$foods[$i]."', '".$canteen."', '".$canterName."')";
		$result *= mysql_query($sql);

	}

	if ($result)
		echo "SUCCESS";
	else
		echo "ERROR";

	mysql_close($conn);
?>