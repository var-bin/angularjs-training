// js/controllers/notes-show-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesShowController", NotesShowController);

  NotesShowController.$inject = ["Note"];

  function NotesShowController(Note) {
    let vm = this;

    vm.getNoteById = getNoteById;

    getNoteById();

    function getNoteById() {
      Note.getNoteById()
      .success( (noteData) => {
        vm.note = noteData;
      });
    }
  }
})();
