var myApp = angular.module("myApp",[]);

myApp.controller("myController", function ($scope){
    
    var employee = {
        fname : 'Faisal' ,
        lname : 'Khan',
        gender : 'Male' 
    }
    $scope.employee = employee ;
});