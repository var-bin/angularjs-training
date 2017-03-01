// js/directives/app-navbar.directive

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .directive("appNavbar", appNavbarDirective);

  function appNavbarDirective() {
    return {
      restrict: "E",
      templateUrl: "../templates/directives/app-navbar.directive.html",
      controller: "appNavbarController",
      controllerAs: "appNavbarCtrl"
    }
  }
})();
