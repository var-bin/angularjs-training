// js/directives/nw-category-select.directive

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .directive("nwCategorySelect", nwCategorySelectDirective);

  //nwCategorySelectDirective.$inject = ["Category"];

  function nwCategorySelectDirective() {
    return {
      restrict: "E",
      templateUrl: "../templates/directives/nw-category-select.directive.html"
    };
  }
});
