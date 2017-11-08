myApp.controller('SpellsController', function($http, UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  getSpellsList = function(){
    console.log('Getting spells list from database.');
    $http.get('/spells/getSpellsList').then(function(response){
      console.log('Received response from server:', response);
    });
  };

  getSpellsList();
});
