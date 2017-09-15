
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {

    $scope.name = "faisal khan";        
    // use of http services         
    var successCallBack = function (response) {
        $scope.countryCity =response.data;
    };
    var errorCallBack = function (reason) {
        $scope.error = reason.data;
    }

    $scope.records = $http.get('countrycity.php')
    .then(successCallBack, errorCallBack);

            
});
