// js/services/category.service

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .factory("Category", CategoryFactory);

  CategoryFactory.$inject = ["$resource"];

  function CategoryFactory($resource) {
    return $resource("/api/categories/:id", {id: "@id"}, {});
  }
})();
