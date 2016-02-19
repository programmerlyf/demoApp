angular
    .module('demoApp')
    .controller('addCtrl',[
        '$scope','$state','$stateParams','$http',
        function ($scope,$state,$stateParams,$http) {
          
          
          $scope.save=function(){
            var request = $http.post('/movie/create',{ name:$scope.movie_name, description:$scope.movie_description,
                                                      price:$scope.movie_price, sku:$scope.movie_sku})
                    request.success(function(data, status, headers, config) {
                           $state.go('admin.dashboard');
                      });
          };
           
         
        }
    ]);
