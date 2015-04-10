/**
 * Created by roscoe on 15/4/10.
 */
var hcControllers = angular.module('hcControllers', [])

hcControllers.controller('allCtrl', function($scope, $localStorage) {
    //delete $localStorage.foods;

    $scope.$storage = $localStorage.$default({
        foods: []
    });

    // init
    if($localStorage.foods.length === 0) {
        $localStorage.foods.push(
            {
                name: "番茄炒蛋"
            },
            {
                name: "韭菜鸡蛋饺子"
            },
            {
                name: "方便面"
            },
            {
                name: "干笋牛柳"
            },
            {
                name: "酸辣土豆丝"
            },
            {
                name: "河粉"
            },
            {
                name: "葫芦瓜炒蛋"
            },
            {
                name: "泡菜炒饭"
            },
            {
                name: "炒西兰花"
            },
            {
                name: "木耳炒鸡蛋"
            }
        )
    }
})

hcControllers.controller('mainCtrl', function($scope, $localStorage) {


    var foods = $localStorage.foods,
        foodNum = foods.length

    $scope.currentFood = "点击按钮开始呦！"

    $scope.choose = function(){
        var randInterval = setInterval(function(){
            var randNum = Math.floor((Math.random() * foodNum));
            $scope.currentFood = foods[randNum].name
            if(!$scope.$$phase) {
                $scope.$digest()
            }
        }, 50)

        setTimeout(function(){
            clearInterval(randInterval)
        }, 1000)
    }
})

hcControllers.controller('listCtrl', function($scope, $localStorage) {
    // 编辑
    $scope.maskEditVisible = false
    $scope.currentFood = ""
    $scope.currentIndex = null
    $scope.editName = ""

    $scope.editFood = function(food, index){
        $scope.currentFood = food
        $scope.currentIndex = index
        $scope.editName = food.name
        $scope.maskEditVisible = true
    }

    $scope.editCancel = function(){
        $scope.maskEditVisible = false
    }

    $scope.editConfirm = function(){
        $scope.currentFood.name = $scope.editName

        if($scope.editName === ""){
            $localStorage.foods.splice($scope.currentIndex, 1)
        }
        $scope.maskEditVisible = false
    }
    $scope.emptyEditInput = function(){
        $scope.editName = ""
    }

    // 添加
    $scope.maskAddVisible = false
    $scope.addName = ""

    $scope.addFood = function(){
        $scope.maskAddVisible = true
    }
    $scope.addConfirm = function(){
        if($scope.addName !== ""){
            $localStorage.foods.push({
                "name": $scope.addName
            })
            $scope.addName = ""
        }
        $scope.maskAddVisible = false
    }
    $scope.addCancel = function(){
        $scope.maskAddVisible = false
    }
    $scope.emptyAddInput = function(){
        $scope.addName = ""
    }
})