
var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http, $log) {

            
    // use of http services         
    var successCallBack = function (response) {
        $scope.records =response.data.records;
        $log.info($scope.records);
        
    };
    var errorCallBack = function (reason) {
        $scope.error = reason.data;
        $log.error(reaso);
        
    }

    $scope.records = $http.get('cusomers.php')
    .then(successCallBack, errorCallBack);

            
});
