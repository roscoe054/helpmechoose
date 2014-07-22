<?php
/* 代码备注中的echo为调试用代码，请勿删除 */



	include("bg/conn.php");

	//中心区域接收
	$getCenter = $_GET['center'];
	$getProvince = $_GET['province'];
	$getCity = $_GET['city'];
	$getRegional = $_GET['regional'];

	//检验数据合法性
	$result = mysql_query("SELECT * FROM regional_center WHERE name='{$getCenter}' AND province='{$getProvince}' AND city='{$getCity}' AND district='{$getRegional}'");
	$match = mysql_fetch_row($result);
	if ($match == NULL)	die("ERROR");

	//取得所有餐厅名
	$result = mysql_query("SELECT DISTINCT canteen FROM menu WHERE place='广东轻工职业技术学院(南海校区)'");
	$canteen = array();
	while ($row = mysql_fetch_array($result))
		array_push($canteen, $row['canteen']);
	$countCanteen = count($canteen);
	
	//根据餐厅名取得相应的食物名
	$food = array();
	for ($i=0; $i<$countCanteen; $i++){
		//echo $canteen[$i]."<br>";

		$result = mysql_query("SELECT food FROM menu WHERE canteen='{$canteen[$i]}' AND place='广东轻工职业技术学院(南海校区)'");
		$food[$canteen[$i]] = array();
		while ($row = mysql_fetch_array($result)){
			array_push($food[$canteen[$i]], $row['food']);
		}
		for ($j=0; $j<count($food[$canteen[$i]]); $j++){
			//echo $food[$canteen[$i]][$j]."<br>";
		}
		//echo "<br>";
	}
	
	//返回指定格式的字符串
	if ($countCanteen != 0){
		echo $countCanteen;
		for ($i=$countCanteen-1; $i>=0; $i--){
			echo "|".$canteen[$i]."|";			
			echo json_encode($food[$canteen[$i]]);
		}
	}else
		echo "ERROR";
	mysql_close($conn);
?>