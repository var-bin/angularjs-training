// js/controllers/notes-index-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesIndexController", NotesIndexController);

  function NotesIndexController($http) {
    let vm = this;

    vm.getNotes = getNotes;

    getNotes();

    function getNotes() {
      $http({
        method: "GET",
        url: "/api/notes"
      }).success( (notesData) => {
        vm.notes = notesData;
      });
    }
  }
})();
