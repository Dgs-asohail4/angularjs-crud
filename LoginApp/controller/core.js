app.controller('mainController', function($scope,$location,$rootScope) {
    if($rootScope.authentication){
        $location.path('/home');
    }
});