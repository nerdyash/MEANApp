angular.module('app').controller('myNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location){
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password){
      mvAuth.authenticateUser(username, password).then(function(success){
        if(success){
          mvNotifier.notify('You have successfully loggedin!');
        }
        else{
          mvNotifier.notify('Username/password not matched!');
        }
      });
    }
    $scope.signout = function(){
      mvAuth.logoutUser().then(function(){
        $scope.username = "";
        $scope.password = "";
        mvNotifier.notify('You have successfully Logged out!');
        $location.path('/');
      })

    }

});
