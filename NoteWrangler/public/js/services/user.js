// js/services/user.js

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .factory("User", UserFactory);

  UserFactory.$inject = ["$http", "$routeParams"];

  function UserFactory($http, $routeParams) {
    function getAllUsers() {
      return $http({
        method: "GET",
        url: "/api/users"
      });
    }

    return {
      getAllUsers
    }
  }
})();
