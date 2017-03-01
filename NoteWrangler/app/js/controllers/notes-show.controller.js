// js/controllers/notes-show.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesShowController", NotesShowController);

  NotesShowController.$inject = ["Note", "$routeParams"];

  function NotesShowController(Note, $routeParams) {
    let vm = this;

    get();

    function get() {
      vm.note = Note.get({id: $routeParams.id});
    }
  }
})();
