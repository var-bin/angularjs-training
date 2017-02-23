// js/controllers/users-index-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("UsersIndexController", UsersIndexController);

  UsersIndexController.$inject = ["User"];

  function UsersIndexController(User) {
    let vm = this;

    vm.getAvatar = getAvatar;

    getAllUsers();

    function getAllUsers() {
      User.getAllUsers()
      .success( (usersData) => {
        vm.users = usersData;
      });
    }

    function getAvatar(email) {
      return Gravatar.getAvatar(email);
    }
  }

})();
