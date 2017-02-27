// js/controllers/notes-edit.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesEditController", NotesEditController);

  NotesEditController.$inject = ["Note", "$routeParams"];

  function NotesEditController(Note, $routeParams) {
    let vm = this;

    get();

    function get() {
      vm.note = Note.get({id: $routeParams.id});
    }
  }
})();
