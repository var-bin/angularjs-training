// js/controllers/app-navbar.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("appNavbarController", appNavbarController);

  appNavbarController.$inject = ["$location", "$routeParams"];

  function appNavbarController($location, $routeParams) {
    let vm = this;

    vm.setActive = setActive;

    function setActive(path) {
      return $location.path().indexOf(path) !== -1;
    }
  }
})();
