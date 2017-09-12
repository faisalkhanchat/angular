
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {

            
    // use of http services         
    var successCallBack = function (response) {
        $scope.records =response.data.records;
    };
    var errorCallBack = function (reason) {
        $scope.error = reason.data;
    }

    $scope.records = $http.get('customers.php')
    .then(successCallBack, errorCallBack);

            
});
