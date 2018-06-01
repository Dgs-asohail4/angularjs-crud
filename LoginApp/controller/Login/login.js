app.controller('loginCtrl', function($scope, $location, myService, $rootScope) {
    if($rootScope.authenticated){
        $location.path('/home');
    }
    $scope.routeToRegister = function(){
        $location.path('/register');
    }

    $scope.login = function(){
        var users = myService.getUsers();

        $scope.error = false;
        $scope.errorMsg = "";

    
        users.forEach(element => {
            if(element.email == $scope.email && element.password == $scope.password){
                myService.set(element);
                $rootScope.authenticated = true;
                $location.path('/home');
            }
        });

        $scope.error = true;
        $scope.errorMsg = "Login Error"
    }
});
