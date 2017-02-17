// js/controllers/notes-create-controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("NotesCreateController", ($http) => {
      let controller = this;

      this.saveNote = saveNote;

      function saveNote(note) {
        controller.errors = {};

        return $http({
          method: "POST",
          url: "/api/notes",
          data: note
        }).catch( (note) => {
          controller.errors = note.data.error;
        });
      }
    });
})();

