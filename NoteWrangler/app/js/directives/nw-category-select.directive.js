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
      link: (scope, element, attrs) => {
        scope.categories = Category.query();
      },
      // need refactoring
      /*controller: ($scope) => {
        this.activeCategory = () => {
          return $scope.activeCategory;
        };

        this.setActiveCategory = (category) => {
          $scope.activeCategory = category;
        };

        return this;
      },*/
      controller: "nwCategorySelectController",
      controllerAs: "nwCategorySelectCtrl"
    };
  }
})();
