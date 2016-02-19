angular
    .module('demoApp')
    .controller('adminCtrl', [
        '$scope',
        '$state',
        '$cookieStore',
        function ($scope,$state,$cookieStore) {
             if($cookieStore.get('loginSucc')){
               $scope.name=$cookieStore.get('loginSucc')[0].name;
             }
        $scope.logout=function(){
          $cookieStore.remove('loginSucc');
          $state.go('login');
        }
           

        }
    ])
;