'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.register',
  'myApp.home',
  'myApp.createUser',
  'myApp.listUser',
  'myApp.editUser',
  'myApp.version',
  'myApp.navbar',
  'myApp.service'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/login'});

}]);
