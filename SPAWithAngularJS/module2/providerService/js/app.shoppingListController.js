// app.shoppingListController.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ShoppingListController", ShoppingListController);

  ShoppingListController.$inject = ["ShoppingListService"];

  function ShoppingListController(ShoppingListService) {
    let list = this;

    list.items = ShoppingListService.getItems();

    list.addItem = addItem;
    list.removeItem = removeItem;

    function addItem() {
      try {
        ShoppingListService.addItem(list.itemName, list.itemQuantity);

        list.itemName = "";
        list.itemQuantity = "";
      } catch (error) {
        list.errorMessage = error;
      }
    }

    function removeItem(index) {
      if (index < ShoppingListService.getMaxItems()) {
        list.errorMessage = "";
      }

      ShoppingListService.removeItem(index);
    }
  }
})();
