// app.shoppingListShowController.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ShoppingListShowController", ShoppingListShowController);

  ShoppingListShowController.$inject = ["ShoppingListService"];

  function ShoppingListShowController(ShoppingListService) {
    let ShowCtrl = this;

    ShowCtrl.items = ShoppingListService.getItems();
    ShowCtrl.removeItem = removeItem;

    function removeItem(itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    }
  }
})();
