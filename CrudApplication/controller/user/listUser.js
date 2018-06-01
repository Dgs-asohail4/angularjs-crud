
app.controller('listUser', function($scope,$location) {
   // console.log($scope.$parent);
   var parent  =  $scope.$parent;

   $scope.editUser = function(id){
       console.log(id);
       $scope.$parent.service.set(id);
       $location.path("/users/edit");
   }

   $scope.delteUser = function(id){

    parent.users.forEach((element,index) => {
        if(element.id == id) {
            parent.firstname = element.firstname;
            parent.lastname = element.lastname;
            parent.gender = element.gender;
            parent.email = element.email;
            
            parent.users.splice(index,1);
        }
    });

   }

   
});
