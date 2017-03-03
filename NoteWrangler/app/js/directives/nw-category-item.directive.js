// js/directives/nw-category-item.directive

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .directive("nwCategoryItem", nwCategoryItemDirective);

  nwCategoryItemDirective.$inject = ["Category"];

  function nwCategoryItemDirective() {
    return {
      replace: true,
      restrict: "E",
      templateUrl: "../templates/directives/nw-category-item.directive.html",
      scope: {
        category: "="
      },
      require: "^nwCategorySelect",
      link: (scope, element, attrs, nwCategorySelectCtrl) => {
        scope.makeActive = function () {
          nwCategorySelectCtrl.setActiveCategory(scope.category);
        };

        scope.categoryActive = function () {
          return nwCategorySelectCtrl.getActiveCategory() === scope.category.name;
        };
      }
    }
  }
})();
