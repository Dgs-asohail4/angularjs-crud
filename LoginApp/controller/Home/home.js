app.controller('homeCtrl',function($scope, $location, myService, $rootScope){
 
    if(!$rootScope.authenticated){
        $location.path('/login');
    }

    $scope.user = myService.get();


    $scope.logout = function(){
        myService.set({})
        $rootScope.authenticated = false;
             
        $location.path('/login');

    }

})