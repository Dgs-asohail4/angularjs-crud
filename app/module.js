var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"createUser.htm"
    })
    .when("/users",{
        templateUrl:"listUser.htm"
    })
    .otherwise({
        redirectTo:'/'
    });
});