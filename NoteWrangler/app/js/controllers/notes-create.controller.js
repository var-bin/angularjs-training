// js/controllers/notes-create.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesCreateController", NotesCreateController);

  NotesCreateController.$inject = ["Note"];

  function NotesCreateController(Note) {
    let vm = this;

    vm.note = new Note();
    vm.saveNote = saveNote;

    function saveNote(noteData) {
      vm.errors = {};
      vm.updating = true;

      note.save(noteData)
      .catch( (noteError) => {
        vm.errors = [noteError.data.error];
      })
      .finaly( () => {
        vm.updating = false;
      });
    }
  }
})();

