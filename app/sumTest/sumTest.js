angular
  .module("myApp.sumTest", [])
  .config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/", {
        templateUrl: "sumTest/sumTest.html",
        controller: "TestController"
      });
    }
  ])
  .controller("TestController", function($scope, $http) {
    $scope.sum = () => {
      $scope.data = {
        first: $scope.first,
        second: $scope.second
      };
      let dataSum = $scope.data;
      $http.post("http://localhost:3012/numbers/", dataSum).then(data => {
        $scope.summa = data.data.sum;
      });
    };
  });
