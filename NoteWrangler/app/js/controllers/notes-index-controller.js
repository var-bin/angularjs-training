// js/controllers/notes-index-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesIndexController", NotesIndexController);

  NotesIndexController.$inject = ["Note"];

  function NotesIndexController(Note) {
    let vm = this;

    query();

    function query() {
      vm.notes = Note.query();
    }
  }
})();
