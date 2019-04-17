'use strict';

angular.module('myApp.editUser', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit', {
    templateUrl: 'EditUser/EditUser.html',
    controller: 'EditUserCtrl'
  });
}])

.controller('EditUserCtrl', ['$scope','$location','appService','$rootScope',function($scope, $location, appService, $rootScope) {


    // if(!$rootScope.authenticated){
    //     $location.path('/login');
    // }

    var id = appService.getEditId();

    var persons = appService.getPerson();

    var index_ = -1;
    persons.forEach((element,index) => {
        if(element.id == id) {
            $scope.firstname = element.firstname;
            $scope.lastname = element.lastname;
            $scope.gender = element.gender;
            $scope.email = element.email;

            index_ = index;
        }
    });

    $scope.saveUser = function() {
//        persons.splice(index_, 1);
        appService.deletePerson(id);

        var newPerson = {
            firstname : $scope.firstname,
            lastname:$scope.lastname,
            gender:$scope.gender,
            email:$scope.email,
            id : id
        }

        appService.pushPerson(newPerson);

        $location.path('/list');
    }
}]);