'use strict';

angular.module('myApp.service', [])
.factory('appService', function() {
    var savedData = {};
    var users = [];
    var id = 0;
    var persons = [];
    var editId = 0;

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

    function getId(){
        return id++;
    }

    function pushPerson(user){
        persons.push(user);
    }
  
    function getPerson(){
        return persons;
    }

    function deletePerson(id){
        var index_;
        persons.forEach(function(element,index){
            if(element.id == id){
                index_ = index
            }
        });

        persons.splice(index_,1);
    }

    function setEditId(id){
        editId = id;
    }

    function getEditId(){
        return editId;
    }
   
    return {
     set: set,
     get: get,
     push:push,
     getUsers:getUsers,
     getPerson:getPerson,
     pushPerson:pushPerson,
     id:getId,
     deletePerson:deletePerson,
     getEditId:getEditId,
     setEditId:setEditId
    }
   
});