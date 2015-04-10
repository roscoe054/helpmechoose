var canteen = ["1","2"];					//储存餐厅名
var food = [
	"红烧猪排盖饭",
	"香菇鸡丁盖饭",
	"酱香排骨盖饭",
	"蒜苔炒肉盖饭",
	"香干炒肉盖饭",
	"土豆丝炒肉盖饭"
];						//储存餐厅对应的食物名
var canteenCount = 0;				//餐厅数量
var foodCount = [];					//储存餐厅对应的食物数量
var canteenRange = [];				//餐厅随机范围
var AFEnable = false;				//高级功能启用状态

$(document).ready(function() {

	//随机动画
	$("#btnHelp").click(function() {
		timerTimeout = setTimeout("timeout()", 500);
		timerInterval = setInterval("helpMeChoose()", 60);
		$(this).text("思考中...");
	});

	//初始化「高级功能」的事件
	$('#collapseOne').on('show.bs.collapse', function(){AFEnable = true;});
	$('#collapseOne').on('hide.bs.collapse', function(){AFEnable = false;});
});

function helpMeChoose() {

	/*----------------"高级功能"模块----------------*/
	//随机范围的选定
	if (AFEnable) 
		if (($("#canteenChoose").html().indexOf("选择餐厅") != -1) || ($("#canteenChoose").html().indexOf("还是随便吧") != -1)) 
			canteenRange = canteen;
		else 
			canteenRange = [$("#canteenChoose").html().substr(0, 3)];
	else
		canteenRange = canteen;
	/*----------------------------------------------*/

	//随机选择餐厅
	var canteenNum;
	var canteenShow;

	if (canteenRange.length > 1)
		canteenNum = rand(canteenCount);
	else
		canteenNum = $.inArray(canteenRange[0], canteen);
	canteenShow = canteen[canteenNum];

	//随机选择餐厅中的食物
	//var randFoodNum = rand(food[canteen[canteenNum]].length);
	//var randFood = food[canteenShow][randFoodNum];

	var randFoodNum = rand(food.length);
	var randFood = food[randFoodNum];

	//显示到展示板上
	//$("#canteen").html(canteenShow);
	$("#food").html(randFood);
}

/* 餐厅锁定下拉按钮函数 */
/* 功能：输出下拉菜单   */
/* 输入：餐厅名数组     */
/* 返回：无返回         */
function outputCanteenLockList(canteen){
	for (i in canteen){
		$("#canteenList").html($("#canteenList").html() + "<li><a href=\"#\" id=\"canteenChoose"+ i +"\" >"+ canteen[i] +"</a></li>");
	}
	$("#canteenList").html($("#canteenList").html() + "<li class=\"divider\"></li><li><a href=\"#\" id=\"canteenChooseWhatever\">还是随便吧</a></li>");


}

function rand(n) {
	return Math.floor(Math.random() * (n));
}

function timeout() {
	clearTimeout(timerTimeout);
	timerInterval = window.clearInterval(timerInterval);
	$("#btnHelp").text("再选选");
}