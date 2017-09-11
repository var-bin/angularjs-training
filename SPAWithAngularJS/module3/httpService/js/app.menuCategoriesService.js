// app.menuCategoriesService.js

(function() {
  "use strict";

  angular.module("MenuCategoriesApp")
    .service("MenuCategoriesService", MenuCategoriesService);

  function MenuCategoriesService() {
    let service = this;

    service.getMenuCategories = getMenuCategories;

    function getMenuCategories() {

    }
  }
})();
