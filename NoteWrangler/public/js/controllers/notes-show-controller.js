// js/controllers/notes-show-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesShowController", NotesShowController);

  function NotesShowController($http, $routeParams) {
    let vm = this;

    vm.showNote = showNote;

    showNote();

    function showNote(id) {
      $http({
        method: "GET",
        url: "/api/notes/" + $routeParams.id
      }).success( (noteData) => {
        vm.note = noteData;
      });
    }
  }
})();
