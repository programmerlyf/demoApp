var demoApp = angular.module('demoApp', [
    'ui.router',
    'oc.lazyLoad',
    'ngCookies'
]);

demoApp
    .run([
        '$rootScope',
        '$state',
        '$stateParams',
        '$cookieStore',
          
         function ($rootScope,$state,$stateParams,$cookieStore) {
            $rootScope.$on('$stateChangeStart', function (event,toState,toParams, fromState) {
             
              if( (toState.url != '/login')){
                if(!$cookieStore.get('loginSucc')){
                   event.preventDefault();
                  $state.go('login')
                 
                }
              }else{
                if($cookieStore.get('loginSucc')){
                   event.preventDefault();
                  $state.go('admin.dashboard');
                 
                }
              }
              
              
            });
         }]); 
