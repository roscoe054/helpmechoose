var canteen = [];				//储存餐厅名
var food 	= [];				//储存餐厅对应的食物名
var canteenCount = 0;			//餐厅数量
var foodCount = [];				//储存餐厅对应的食物数量
var canteenFloor = [12,14,16];	//餐厅层数
var canteenRange = [];			//餐厅随机范围

var AFEnable = false;			//高级功能启用状态

$(document).ready(function(){

	init();

	//初始化一些click事件
	$("#btnHelp").click(function(){
		timerTimeout = setTimeout("clearTimeout(timerTimeout);	timerInterval = window.clearInterval(timerInterval);", 500);
		timerInterval = setInterval("helpMeChoose()", 80);
	});
	canteenFloor.forEach(function(item){
		$("#canteenChoose"+item).click(function(){
			$("#canteenChoose").html($("#canteenChoose"+item).html()+" <span class=\"caret\"></span>");
		});
	});
	$("#canteenChooseWhatever").click(function(){
		$("#canteenChoose").html($("#canteenChooseWhatever").html()+" <span class=\"caret\"></span>");
	});

	//初始化「高级功能」的事件
	$('#collapseOne').on('show.bs.collapse', function(){
		AFEnable = true;
	});
	$('#collapseOne').on('hide.bs.collapse', function(){
		AFEnable = false;
	});	
});

function init(){

	//初始化饭堂，注释掉的是未支持的餐厅
	canteen.push("一饭二");
	// canteen.push("一饭三");
	canteen.push("一饭四");
	// canteen.push("一饭五");
	canteen.push("一饭六");
	// canteen.push("二饭一");
	// canteen.push("二饭二");

	//默认canteenRange为全部餐厅
	canteenRange = canteen;

	//初始化饭堂内的食物
	for (var i in canteen){
		food[canteen[i]] = [];
	}

	//初始化食物
	foodInit();

	//获取饭堂的数量
	canteenCount = canteen.length;

	//获取每个饭堂的食物种类数量
	for (var i=0; i<canteenCount; i++){
		foodCount[i] = food[canteen[i]].length;
	}
}

function helpMeChoose(){

	//「高级功能」模块
	if (AFEnable) {
		if (($("#canteenChoose").html().indexOf("选择餐厅") != -1) || ($("#canteenChoose").html().indexOf("还是随便吧") != -1)){
			//全范围随机
			canteenRange = canteen;
		}else{
			canteenRange = [$("#canteenChoose").html().substr(0, 3)];
		}
	}else{
		canteenRange = canteen;
	}

	//随机选择餐厅
	var canteenNum;
	var canteenShow;

	if (canteenRange.length > 1){
		canteenNum = rand(canteenCount);
	}else{
		canteenNum = $.inArray(canteenRange[0], canteen);
	}
	canteenShow = canteen[canteenNum];

	//随机选择餐厅中的食物
	var randFoodNum = rand(food[canteen[canteenNum]].length);
	var randFood = food[canteenShow][randFoodNum];

	//显示到展示板上
	$("#canteen").html(canteenShow);
	$("#food").html(randFood);
}

function rand(n){
	return Math.floor(Math.random()*(n));
}

console.log("HelpMeChoose\nVersion:1.2\n\nJasin Yip\nE-mail:yejunxing@gmail.com");