
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http, $log,stringService) {

    $scope.transformString = function(input){
        $scope.output =     stringService.processString(input);
    }     
});
