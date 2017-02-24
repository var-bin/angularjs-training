// js/directives/navbar

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .directive("navbar", navbarDirective);

  function navbarDirective() {
    return {
      restrict: 'E',
      templateUrl: '../templates/directives/app-navbar.directive.html',
      controller: "NavbarController",
      controllerAs: "NavbarCtrl"
    }
  }
})();
