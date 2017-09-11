// app.menuCategoriesController.js

(function() {
  "use strict";

  angular.module("MenuCategoriesApp")
    .controller("MenuCategoriesController", MenuCategoriesController);

  MenuCategoriesController.$inject = ["MenuCategoriesService"];

  function MenuCategoriesController(MenuCategoriesService) {
    let vm = this;

    let promise = MenuCategoriesService.getMenuCategories();
  }
})();
