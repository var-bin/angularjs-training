// js/controllers/notes-index-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesIndexController", NotesIndexController);

  NotesIndexController.$inject = ["Note"];

  function NotesIndexController(Note) {
    let vm = this;

    vm.getAllNotes = getAllNotes;

    getAllNotes();

    function getAllNotes() {
      Note.getAllNotes()
      .success( (notesData) => {
        vm.notes = notesData;
      });
    }
  }
})();
