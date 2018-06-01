app.controller('RegisterCtrl',function($scope,$location,myService,$rootScope){

    if($rootScope.authenticated){
        $location.path('/home');
    }
    
    $scope.routeToLogin = function() {
        $location.path("/login");
    }

    $scope.register = function(){

        $scope.error = false;
        $scope.errorMsg = "";

        if($scope.password != $scope.conPassword){
            $scope.error = true;
            $scope.errorMsg = "Password mismatch";
        } else {
            var newUser = {
                name:$scope.name,
                email : $scope.email,
                password: $scope.password
            }
            myService.push(newUser);

            myService.set(newUser);
            $rootScope.authenticated = true;
             
            $location.path("/home");
        }

        
    }
});