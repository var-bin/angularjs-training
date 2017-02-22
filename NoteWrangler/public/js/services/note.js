// js/services/note.js

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .factory("Note", NoteFactory);

  NoteFactory.$inject = ["$http", "$routeParams"];

  function NoteFactory($http, $routeParams) {
    function getAllNotes() {
      return $http({
        method: "GET",
        url: "/api/notes"
      });
    }

    function getNoteById() {
      return $http({
        method: "GET",
        url: "/api/notes/" + $routeParams.id
      })
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
      createNote,
      getNoteById
    }
  }
})();
