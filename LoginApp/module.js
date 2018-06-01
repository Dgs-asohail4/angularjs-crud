var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"Login/index.html"
    })
    .when("/login",{
        templateUrl:"Login/index.html"
    })
    .when("/register",{
        templateUrl:"Register/index.html"
    })
    .when("/home",{
        templateUrl:"Home/index.html"
    })
    .otherwise({
        redirectTo:'/'
    });
});