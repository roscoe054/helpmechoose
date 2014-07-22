var canteen = [];					//储存餐厅名
var food = [];						//储存餐厅对应的食物名
var canteenCount = 0;				//餐厅数量
var foodCount = [];					//储存餐厅对应的食物数量
var canteenRange = [];				//餐厅随机范围
var AFEnable = false;				//高级功能启用状态

$(document).ready(function() {

	$.get(
		"getFoods.php",
		//传送中心区域
		{
			center:"广东轻工职业技术学院(南海校区)",
			province:"广东省",
			city:"佛山市",
			regional:"南海区"
		},
		function(data){
			if (data != "ERROR"){
				var allData = data.split("|");

				canteenCount = parseInt(allData[0]);
				for (var i=1; i<canteenCount*2; i+=2){
					//添加餐厅名
					canteen.push(allData[i]);

					//添加餐厅对应的食物
					food[canteen[canteen.length-1]] = JSON.parse(allData[i+1]);
				}

				//获取每个餐厅的食物种类数量
				for (var i = 0; i < canteenCount; i++) 
					foodCount[i] = food[canteen[i]].length;

				//默认canteenRange为全部餐厅
				canteenRange = canteen;

				outputCanteenLockList(canteen);

				//餐厅锁定下拉按钮
				$("#canteenList a").each(function(){
					$(this).click(function(){
						var title = $(this).html();
						$("#canteenChoose").html(title + " <span class=\"caret\"></span>");
					});
				});

				$("#food").html("点击按钮开始哟！");
			}else{
				$("#food").html("噢漏~数据加载失败了！");
				$("#food").css("color", "red");
			}
		}
	);

	//随机动画
	$("#btnHelp").click(function() {
		timerTimeout = setTimeout("timeout()", 500);
		timerInterval = setInterval("helpMeChoose()", 80);
		$(this).button("loading");
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
	var randFoodNum = rand(food[canteen[canteenNum]].length);
	var randFood = food[canteenShow][randFoodNum];

	//显示到展示板上
	$("#canteen").html(canteenShow);
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
	$("#btnHelp").button("reset");
	$("#btnHelp").html("再选选");
}