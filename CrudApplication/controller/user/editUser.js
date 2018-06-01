
app.controller('editUser', function($scope,$location) {
    var id = $scope.$parent.service.get();
    var parent  =  $scope.$parent;

    var index_ = -1;
    parent.users.forEach((element,index) => {
        if(element.id == id) {
            parent.firstname = element.firstname;
            parent.lastname = element.lastname;
            parent.gender = element.gender;
            parent.email = element.email;

            index_ = index;
        }
    });

    $scope.saveUser = function() {
        parent.users.splice(index_, 1);
        var newUser = {
            firstname : parent.firstname,
            lastname:parent.lastname,
            gender:parent.gender,
            email:parent.email,
            id : id
        }

        parent.users.push(newUser);

        $location.path('/users');
    }
});
