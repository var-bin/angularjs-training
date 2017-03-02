// js/controllers/nw-category-select.controller

(function() {
  "use strict";

  angular.module("NoteWrangler")
    .controller("nwCategorySelectController", nwCategorySelectController);

  nwCategorySelectController.$inject = ["Category"];

  function nwCategorySelectController(Category) {
    let vm = this;

    vm.activeCategory = _activeCategory;
    vm.setActiveCategory = _setActiveCategory;

    function _activeCategory() {
      return vm.activeCategory;
    }

    function _setActiveCategory(category) {
      vm.activeCategory = category;
    }
  }
})();
