'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'Home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location','appService','$rootScope',function($scope, $location, appService, $rootScope) {
    if(!$rootScope.authenticated){
        $location.path('/login');
    }

    $scope.user = appService.get();


    $scope.logout = function(){
        appService.set({})
        $rootScope.authenticated = false;
        $rootScope.$broadcast('auth',false);//pass params you want to pass
      
             
        $location.path('/login');

    }
}]);