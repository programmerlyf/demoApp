angular
    .module('demoApp')
    .controller('loginCtrl', [
        '$scope','$http','$state','$cookieStore',
        function ($scope,$http,$state,$cookieStore) {
        
           $scope.login=function(){
              var request = $http.post('/user/find', {email:$scope.login_username, password:$scope.login_password})
                    request.success(function(data, status, headers, config) {
                            if(data.length>0){
                              $cookieStore.put('loginSucc',data);
                              $state.go('admin.dashboard');
                            }else{
                              $scope.validCredential=false;
                             $cookieStore.remove('loginSucc');
                            }
                      });
          };
          
          $scope.createUser = function(){
               var request = $http.post('/user/create', { email:$scope.register_email, name:$scope.register_name, password:$scope.register_password})
                    request.success(function(data, status, headers, config) {
                            $state.go('admin.dashboard');
                      });
               };
          
          $scope.isExistEmail=function(){
            if($scope.register_email){
              var request = $http.post('/user/find', {email:$scope.register_email})
                    request.success(function(data, status, headers, config) {
                            if(data.length>0){
                              $scope.emailExist=true;
                            }else{
                              $scope.emailExist=false;
                            }
                      });
            }
            
          };
          
          
          
         
        }
    ]);