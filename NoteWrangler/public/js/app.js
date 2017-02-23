// js/app.js

(function() {
  "use strict";

  angular.module("NoteWrangler", ["ngRoute"])
    .config(config);

  config.$inject = ["GravatarProvider"];

  function config(GravatarProvider) {
    GravatarProvider.setSize(60);
    GravatarProvider.setDefaultImage("monsterid");
  }
})();
