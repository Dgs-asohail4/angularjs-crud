'use strict';

angular.module('myApp.navbar', [])
.directive('appNavbar', ['$rootScope', function($rootScope) {

    var auth = false;

    
    return {
        template : 
        `<ul class="menu">
            <li><a href="#!/login">Login</a></li>
            <li><a href="#!/register">Register</a></li>
            <li><a href="#!/home">Home</a></li>
            <li><a href="#!/create">Create User</a></li>
            <li><a href="#!/list">List User</a></li>
            <li><a href="#!/edit">Edit User</a></li>
        </ul>
    `
    }
}]);