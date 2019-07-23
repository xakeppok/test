angular
    .module('myApp.sum', [])
    .config([
        '$routeProvider',
        $routeProvider => {
            $routeProvider.when('/', { templateUrl: 'sum/sum.html', controller: 'SumController' });
        },
    ])
    .controller('SumController', function($scope, $http) {
        $scope.str = 'demo';
        $scope.sum = () => {
            $scope.data = { first: $scope.first, second: $scope.second };
            const dataSum = $scope.data;
            $http.post('http://localhost:3012/numbers/', dataSum).then(
                data => {
                    $scope.sum = data.data.sum;
                },
                error => alert(error.data.error)
            );
        };
    });
