// js/directives/nw-category-select.directive

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .directive("nwCategorySelect", nwCategorySelectDirective);

  function nwCategorySelectDirective() {
    return {
      replace: true,
      restrict: "E",
      templateUrl: "../templates/directives/nw-category-select.directive.html",
      scope: {
        notes: "=",
        activeCategory: "="
      },
      link: (scope, element, attrs, nwCategorySelectCtrl) => {
        scope.categories = nwCategorySelectCtrl.query();
      },
      controller: "nwCategorySelectController",
      controllerAs: "nwCategorySelectCtrl"
    };
  }
})();
