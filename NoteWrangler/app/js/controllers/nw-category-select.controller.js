// js/controllers/nw-category-select.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("nwCategorySelectController", nwCategorySelectController);

  nwCategorySelectController.$inject = ["Category"];

  function nwCategorySelectController(Category) {
    let vm = this;

    vm.query = _query;
    vm.getActiveCategory = _getActiveCategory;
    vm.setActiveCategory = _setActiveCategory;

    function _query() {
      return Category.query();
    }

    function _getActiveCategory() {
      return vm.activeCategory;
    }

    function _setActiveCategory(newCategory) {
      vm.activeCategory = newCategory.name;
    }
  }
})();
