demoApp
    .config([
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        
        function ($stateProvider,$locationProvider,$urlRouterProvider) {
          
          $urlRouterProvider
               
          .otherwise('/login');
          
            $stateProvider
                .state("login", {
                    url: "/login",
                    templateUrl: 'modules/login/loginView.html',
                    controller: 'loginCtrl',
                    resolve: {
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'modules/login/loginController.js'
                            ]);
                        }]
                    }
                })
              .state("admin",{
                  url: "/admin",
                  templateUrl:'templates/admin.html'
              })
              .state("admin.dashboard",{
                  url: "/dashboard",
                  templateUrl: 'modules/admin/dashboardView.html',
                  controller: 'dashboardCtrl',
                  resolve: {
                       
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'modules/admin/dashboardController.js'
                            ]);
                        }]
                    }
              }).state("admin.create",{
                  url: "/create",
                  templateUrl: 'modules/admin/movieEditView.html',
                 
                  resolve: {
                       
                        deps: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                'modules/admin/movieeditController.js'
                            ]);
                        }]
                    }
              });
          
           $locationProvider.html5Mode(true);

               
        }
    ]);

