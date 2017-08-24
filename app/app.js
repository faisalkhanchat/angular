// creating a module
var myApp = angular.module("myApp",[]);
// creating a controller
var myController = function ($scope){
    $scope.message = "My name is faisal khan" ;
};

// registering controller in the module
myApp.controller("myController", function ($scope){
    $scope.message = "My name is faisal khan" ;
});