app.factory('myService', function() {
    var savedData = {}
    var users = []

    function set(data) {
      savedData = data;
    }
    function get() {
     return savedData;
    }

    function push(user){
      users.push(user);
    }

    function getUsers(){
      return users;
    }
   
    return {
     set: set,
     get: get,
     push:push,
     getUsers:getUsers
    }
   
});