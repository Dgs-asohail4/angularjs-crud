
app.controller('createUser', function($scope) {
    $scope.addUser = function(){

        var parent =  $scope.$parent;

        parent.users.push({
            id:parent.id++,
            firstname: parent.firstname,
            lastname:parent.lastname,
            gender:parent.gender,
            email:parent.email
        });

        parent.firstname = "";
        parent.lastname = "";
        parent.gender = "1";
        parent.email = "";
    }
});
