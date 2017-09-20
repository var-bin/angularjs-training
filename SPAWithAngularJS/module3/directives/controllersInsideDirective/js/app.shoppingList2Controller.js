// app.shoppingList2Controller.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .controller("ShoppingList2Controller", ShoppingList2Controller);

  ShoppingList2Controller.$inject = ["ShoppingListFactory"];

  function ShoppingList2Controller(ShoppingListFactory) {
    let list = this;

    // Use factory to create new shopping list service
    const shoppingList = ShoppingListFactory(3);

    list.items = shoppingList.getItems();

    list.addItem = addItem;
    list.removeItem = removeItem;

    function addItem() {
      try {
        shoppingList.addItem(list.itemName, list.itemQuantity);

        list.itemName = "";
        list.itemQuantity = "";
      } catch (error) {
        list.errorMessage = error;
      }
    }

    function removeItem(index) {
      if (index < 3) {
        list.errorMessage = "";
      }

      shoppingList.removeItem(index);
    }
  }
})();
