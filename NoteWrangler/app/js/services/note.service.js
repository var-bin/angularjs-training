// js/services/note.service

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .factory("Note", NoteFactory);

  NoteFactory.$inject = ["$routeParams", "$resource"];

  function NoteFactory($routeParams, $resource) {
    return $resource("/api/notes/:id", {id: "@id"}, {
      update: {
        method: "PUT"
      }
    });
  }
})();
