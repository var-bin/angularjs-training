// js/services/user.js

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .factory("User", UserFactory);

  UserFactory.$inject = ["$routeParams", "$resource"];

  function UserFactory($routeParams, $resource) {
    return $resource("/api/users/:id", {id: "@id"});
  }
})();
