// js/directives/nw-category-select.directive

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .directive("nwCategorySelect", nwCategorySelectDirective);

  nwCategorySelectDirective.$inject = ["Category"];

  function nwCategorySelectDirective(Category) {
    return {
      replace: true,
      restrict: "E",
      templateUrl: "../templates/directives/nw-category-select.directive.html",
      link: function (scope, element, attrs) {
        scope.categories = Category.query();
      },
      // need refactoring
      controller: function ($scope) {
        this.getActiveCategory = function() {
          return $scope.activeCategory;
        };

        this.setActiveCategory = function(newCategory) {
          $scope.activeCategory = newCategory.name;
        };

        return this;
      }
      /*controller: "nwCategorySelectController",
      controllerAs: "nwCategorySelectCtrl"*/
    };
  }
})();
