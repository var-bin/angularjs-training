// js/controllers/notes-show.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesShowController", NotesShowController);

  NotesShowController.$inject = ["Note", "$routeParams"];

  function NotesShowController(Note, $routeParams) {
    let vm = this;

    get();

    vm.deleteNote = _deleteNote;

    function get() {
      vm.note = Note.get({id: $routeParams.id});
    }

    function _deleteNote(note) {
      Note.delete(note);
    }
  }
})();
