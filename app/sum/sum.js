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
            let dataSum = $scope.data;
            $http.post('http://localhost:3012/numbers/', dataSum).then(
                data => {
                    $scope.summa = data.data.sum;
                },
                error => console.error(error.data.error)
            );
        };
    });
