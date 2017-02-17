// js/controllers/notes-create-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesCreateController", NotesCreateController);

  function NotesCreateController($http) {
    let vm = this;

    vm.saveNote = saveNote;

    function saveNote(noteData) {
      vm.errors = {};

      return $http({
        method: "POST",
        url: "/api/notes",
        data: noteData
      }).catch( (note) => {
        vm.errors = note.data.error;
      });
    }
  }
})();

