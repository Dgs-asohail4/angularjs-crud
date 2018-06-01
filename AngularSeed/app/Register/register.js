'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'Register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope','$location','appService','$rootScope',function($scope, $location, appService, $rootScope) {
  if($rootScope.authenticated){
    $location.path('/home');
  }

  $scope.routeToLogin = function() {
      $location.path("/login");
  }

  $scope.register = function(){

      $scope.error = false;
      $scope.errorMsg = "";

      if($scope.password != $scope.conPassword){
          $scope.error = true;
          $scope.errorMsg = "Password mismatch";
      } else {
          var newUser = {
              name: $scope.name,
              email : $scope.email,
              password: $scope.password
          }
          appService.push(newUser);

          appService.set(newUser);
          $rootScope.authenticated = true;
          $rootScope.$broadcast('auth',true);//pass params you want to pass
          
          $location.path("/home");
      }    
  }
}]);