'use strict';

angular.module('myApp.createUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'CreateUser/createUser.html',
    controller: 'CreateUserCtrl'
  });
}])

.controller('CreateUserCtrl', ['$scope','$location','appService','$rootScope',function($scope, $location, appService, $rootScope) {
   

    if(!$rootScope.authenticated){
        $location.path('/login');
    }

    $scope.addUser = function(){

        $scope.id = appService.id();


        var newPerson = {
            id:$scope.id,
            firstname: $scope.firstname,
            lastname:$scope.lastname,
            gender:$scope.gender,
            email:$scope.email
        }

        appService.pushPerson(newPerson);

        $scope.firstname = "";
        $scope.lastname = "";
        $scope.gender = "1";
        $scope.email = "";
    }
}]);