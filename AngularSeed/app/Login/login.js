'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'Login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope','$location','appService','$rootScope',function($scope, $location, appService, $rootScope) {
    if($rootScope.authenticated){
        $location.path('/home');
    }
  
    $scope.login = function(){
      var users = appService.getUsers();

      $scope.error = false;
      $scope.errorMsg = "";

  
      users.forEach(element => {
          if(element.email == $scope.email && element.password == $scope.password){
              myService.set(element);
              $rootScope.authenticated = true;
              $rootScope.$broadcast('auth',true);//pass params you want to pass
      
              $location.path('/home');
          }
      });

      $scope.error = true;
      $scope.errorMsg = "Login Error"
    }
}]);