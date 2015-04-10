/**
 * Created by roscoe on 15/4/10.
 */
var helpChooseApp = angular.module("helpChooseApp",[
    'ngRoute','ngTouch','ngStorage','hcControllers'
]);

var rootPath = 'http://' + location.hostname + '/helpmechoose/partials/'

helpChooseApp.config(function($routeProvider){
    $routeProvider.when('/list',{
        templateUrl: rootPath + 'list.html',
        controller: 'listCtrl'
    }).otherwise({
        templateUrl: rootPath + 'index.html',
        controller: 'mainCtrl'
    })
})

helpChooseApp.run(function($rootScope) {
    $rootScope.returnVisible = false

    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        if(location.hash === "#/list"){
            $rootScope.returnVisible = true
        } else{
            $rootScope.returnVisible = false
        }
    });
})