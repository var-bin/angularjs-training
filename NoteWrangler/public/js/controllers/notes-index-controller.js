// js/controllers/notes-index-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesIndexController", function ($http) {
      let controller = this;

      $http({
        method: "GET",
        url: "/api/notes"
      }).success( (data) => {
        controller.notes = data;
      });
    });
})();
