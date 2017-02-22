// js/controllers/navbar-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$location", "$routeParams"];

  function NavbarController($location, $routeParams) {
    let vm = this;

    vm.setActive = setActive;

    function setActive(path) {
      if (!$routeParams.id) {
        return $location.path() == path;
      }

      return $location.path() == path + "/" + $routeParams.id;
    }
  }
})();
