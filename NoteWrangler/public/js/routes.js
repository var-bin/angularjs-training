// js/routes

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when("/notes", {
        templateUrl: "../templates/pages/notes/index.html",
        controller: "NotesIndexController",
        controllerAs: "notesIndexCtrl"
      })
      .when("/users", {
        templateUrl: "../templates/pages/users/index.html"
      })
      .when("/notes/new", {
        templateUrl: "templates/pages/notes/edit.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
})();

