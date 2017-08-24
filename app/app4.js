var myApp = angular
.module("myApp",[])
.controller("myController", function ($scope){
    
    // creating a flower object
    
    var flower = {
        name : 'Tulip',
        country : 'India',
        imgpath : 'assets/images/Tulips.jpg'
    }
    $scope.flower = flower;
    
});