'use strict';

angular.module('myApp.listUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'ListUser/listUser.html',
    controller: 'ListUserCtrl'
  });
}])

.controller('ListUserCtrl', ['$scope','$location','appService','$rootScope',function($scope, $location, appService, $rootScope) {
   
    $scope.persons = appService.getPerson();
    $scope.persons.sort(function(a,b){
        return a.id - b.id;
    })

    $scope.persons.sort();
    $scope.editUser = function(id){
        //console.log(id);
        appService.setEditId(id);
        $location.path("/edit");
    }
 
    $scope.delteUser = function(id){
        appService.deletePerson(id);
        $scope.persons.forEach((element,index) => {
            if(element.id == id) {             
                $scope.persons.splice(index,1);
            }
        });
 
    }
  
}]);