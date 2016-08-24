angular.module('app', ['ngResource', 'ngRoute'])
       .config(function($routeProvider, $locationProvider){
         $locationProvider.html5Mode(true);
         $routeProvider
              .when('/', {templateUrl:'/partials/main/main', controller: 'mvMainCtrl'})
              .when('/admin/users', {templateUrl:'/partials/admin/user-list', controller:  'mvUserListCtrl',
              resolve: {
                     auth: function(mvAuth){
                            return mvAuth.authorizeCurrentuser('admin');
                     }
              }
              });
       });

angular.module('app').run(function($rootScope, $location){
       $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
              if(rejection === 'not allowed'){
                     $location.path('/');
              }
       })
});
