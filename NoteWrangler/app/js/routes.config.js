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
        templateUrl: "../templates/pages/users/index.html",
        controller: "UsersIndexController",
        controllerAs: "usersIndexCtrl"
      })
      .when("/notes/new", {
        templateUrl: "templates/pages/notes/new.html",
        controller: "NotesCreateController",
        controllerAs: "notesCreateCtrl"
      })
      .when("/notes/:id", {
        templateUrl: "templates/pages/notes/show.html",
        controller: "NotesShowController",
        controllerAs: "notesShowCtrl"
      })
      .when("/notes/edit/:id", {
        templateUrl: "templates/pages/notes/edit.html",
        controller: "NotesEditController",
        controllerAs: "notesEditCtrl"
      })
      .otherwise({
        redirectTo: "/",
        templateUrl: "templates/pages/index/app-index.html"
      });
  }
})();

