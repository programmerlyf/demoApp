angular
    .module('demoApp')
    .controller('dashboardCtrl', [
        '$scope',
        '$state',
         '$http',  
        
        function ($scope,$state,$http) {
        var request = $http.get('/movie')
                    request.success(function(data, status, headers, config) {
                            $scope.products_data = data;
                      }); 
          
          $scope.delete = function(id){
             var request = $http.post('/movie/destroy',{id:id})
                    request.success(function(data, status, headers, config) {
                            $state.reload();
                      }); 
          };
           

        }
    ])
;