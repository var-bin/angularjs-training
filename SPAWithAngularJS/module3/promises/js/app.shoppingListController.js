// app.shoppingListController.js

(function() {
  "use strict";

  angular.module("ShoppingListApp")
    .controller("ShoppingListController", ShoppingListController);

  ShoppingListController.$inject = ["ShoppingListService"];

  function ShoppingListController(ShoppingListService) {
    let list = this;

    list.items = ShoppingListService.getItems();

    list.addItem = addItem;
    list.removeItem = removeItem;

    function addItem() {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);

      list.itemName = "";
      list.itemQuantity = "";
    }

    function removeItem(index) {
      /* if (index < ShoppingListService.getMaxItems()) {
        list.errorMessage = "";
      } */

      ShoppingListService.removeItem(index);
    }
  }
})();
