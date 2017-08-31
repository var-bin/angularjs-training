// app.shoppingList1Controller.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ShoppingListController", ShoppingList1Controller);

  ShoppingList1Controller.$inject = ["ShoppingListService"];

  function ShoppingList1Controller(ShoppingListService) {
    let list1 = this;

    list1.items = ShoppingListService.getItems();

    list1.addItem = addItem;
    list1.removeItem = removeItem;

    function addItem() {
      try {
        ShoppingListService.addItem(list1.itemName, list1.itemQuantity);

        list1.itemName = "";
        list1.itemQuantity = "";
      } catch (error) {
        list1.errorMessage = error;
      }
    }

    function removeItem(index) {
      if (index < 3) {
        list1.errorMessage = "";
      }

      ShoppingListService.removeItem(index);
    }
  }
  }
})();
