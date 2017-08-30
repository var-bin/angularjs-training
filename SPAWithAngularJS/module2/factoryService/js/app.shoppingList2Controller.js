// app.shoppingList2Controller.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ShoppingList2Controller", ShoppingList2Controller);

  ShoppingList2Controller.$inject = ["ShoppingListFactory"];

  function ShoppingList2Controller(ShoppingListFactory) {
    let list2 = this;

    // Use factory to create new shopping list service
    const shoppingList = ShoppingListFactory(3);

    list2.items = shoppingList.getItems();

    list2.addItem = addItem;
    list2.removeItem = removeItem;

    function addItem() {
      try {
        shoppingList.addItem(list2.itemName, list2.itemQuantity);

        list2.itemName = "";
        list2.itemQuantity = "";
      } catch (error) {
        list2.errorMessage = error;
      }
    }

    function removeItem(index) {
      if (index < 3) {
        list2.errorMessage = "";
      }

      shoppingList.removeItem(index);
    }
  }
})();
