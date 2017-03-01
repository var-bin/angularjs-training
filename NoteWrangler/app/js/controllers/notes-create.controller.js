// js/controllers/notes-create.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesCreateController", NotesCreateController);

  NotesCreateController.$inject = ["Note"];

  function NotesCreateController(Note) {
    let vm = this;

    vm.note = new Note();

    vm.saveNote = _saveNote;

    function _saveNote(newNote) {
      vm.note.link = "path-to-note";
      vm.note.icon = "question";
      vm.note.description = newNote.description;
      vm.note.title = newNote.title;
      vm.note.content = newNote.content;

      vm.note.$save(newNote);
    }
  }
})();

