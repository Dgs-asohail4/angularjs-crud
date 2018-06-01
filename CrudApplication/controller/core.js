app.controller('mainController', function($scope,myService) {
    $scope.service = myService;
    $scope.gender = "1";
    $scope.users = [{
        id:1,
        email:"ahsan.kai@gmail.com",
        firstname:"Ahsan",
        lastname:"Sohail",
        gender:"1"
    },
    {
        id:2,
        email:"ahsan.kai@gmail.com",
        firstname:"Sohail",
        lastname:"Arshad",
        gender:"1"
    }
    ];
    $scope.id = 2;
});