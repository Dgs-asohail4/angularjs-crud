
app.controller('createUser', function($scope) {
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



    $scope.addUser = function(){
        $scope.users.push({
            id:$scope.id++,
            firstname: $scope.firstname,
            lastname:$scope.lastname,
            gender:$scope.gender,
            email:$scope.email
        });

        $scope.firstname = "";
        $scope.lastname = "";
        $scope.gender = "1";
        $scope.email = "";
    }

    $scope.editUser = function(id){
    
        $scope.users.forEach((element,index) => {
            if(element.id == id) {
                $scope.firstname = element.firstname;
                $scope.lastname = element.lastname;
                $scope.gender = element.gender;
                $scope.email = element.email;

                $scope.users.splice(index,1);
            }
        });
    }

    $scope.deleteUser = function(id){
    
        for(var i=0;i<$scope.users.length;i++){
            console.log("deleting");
            if($scope.users[i].id == id){
                $scope.users.splice(i,1);
            }
        }
    }
});
