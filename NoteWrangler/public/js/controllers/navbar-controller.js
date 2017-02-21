// js/controllers/navbar-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$location"];

  function NavbarController($location) {
    let vm = this;

    vm.setActive = setActive;

    function setActive(path) {
      return $location.path() == path;
    }
  }
})();
