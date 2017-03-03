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
    vm.getCategoryCount = _getCategoryCount;

    function _query() {
      return Category.query();
    }

    function _getActiveCategory() {
      return vm.activeCategory;
    }

    function _setActiveCategory(newCategory) {
      vm.activeCategory = newCategory.name;
    }

    function _getCategoryCount(notes, category) {

      let categoryNotes = notes.filter( (v) => {
        return v.category.name == category.name;
      });

      return categoryNotes.length;
    }
  }
})();
