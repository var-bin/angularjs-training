// js/services/note.js

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .factory("Note", NoteFactory);

  NoteFactory.$inject = ["$http"];

  function NoteFactory($http) {
    function getAllNotes() {
      return $http({
        method: "GET",
        url: "/api/notes"
      });
    }

    function createNote(noteData) {
      return $http({
        method: "POST",
        url: "/api/notes",
        data: noteData
      })
    }

    return {
      getAllNotes,
      createNote
    }
  }
})();
