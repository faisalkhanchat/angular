var myApp = angular.module("myApp", ['ngRoute']);
// creating a controller
var pagecontroller = function ($scope){
    $scope.message = "My name is faisal khan" ;
};
myApp.controller("pagecontroller", function ($scope){
    $scope.message = "My name is faisal khan" ;
});
myApp.config(function($routeProvider,$locationProvider){ 

  $routeProvider
    .when('/',{
        templateUrl : 'home.html',
        controller  : 'pagecontroller'
        })
    .when('/about',{
        templateUrl : 'about.html',
        controller  : 'pagecontroller'
        })
    .otherwise('/');
     $locationProvider.html5Mode(true);
    }) 
