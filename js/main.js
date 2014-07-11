var canteen = [],
	food 	= [],
	canteenCount = 0,
	foodCount = [];

$(document).ready(function(){

	init();

	$("#btnHelp").click(function(){
		timerTimeout = setTimeout("clearTimeout(timerTimeout);	timerInterval = window.clearInterval(timerInterval);", 500);
		timerInterval = setInterval("helpMeChoose()", 80);
	});
});

function init(){
	//初始化饭堂
	canteen.push("一饭二");
	// canteen.push("一饭三");
	canteen.push("一饭四");
	// canteen.push("一饭五");
	canteen.push("一饭六");
	// canteen.push("二饭一");
	// canteen.push("二饭二");

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
	var randCanteenNum = rand(canteenCount);
	var randCanteen = canteen[randCanteenNum];

	var randFoodNum = rand(food[canteen[randCanteenNum]].length);
	var randFood = food[randCanteen][randFoodNum];

	$("#canteen").html(randCanteen);
	$("#food").html(randFood);
}

function rand(n){
	return Math.floor(Math.random()*(n));
}


console.log("HelpMeChoose\nVersion:1.1\n\nJasin Yip\nE-mail:yejunxing@gmail.com");