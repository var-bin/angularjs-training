// js/controllers/users-index-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("UsersIndexController", UsersIndexController);

  UsersIndexController.$inject = ["User", "Gravatar"];

  function UsersIndexController(User, Gravatar) {
    let vm = this;

    vm.getAvatar = getAvatar;

    query();

    function query() {
      vm.users = User.query();
    }

    function getAvatar(email) {
      return Gravatar.getAvatar(email);
    }
  }

})();
