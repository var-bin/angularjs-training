// app.shoppingList1Controller.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .controller("ShoppingList1Controller", ShoppingList1Controller);

  ShoppingList1Controller.$inject = ["ShoppingListFactory"];

  function ShoppingList1Controller(ShoppingListFactory) {
    let list = this;

    // Use factory to create new shopping list service
    const shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();


    list.addItem = addItem;
    list.removeItem = removeItem;

    function addItem() {
      shoppingList.addItem(list.itemName, list.itemQuantity);

      list.itemName = "";
      list.itemQuantity = "";
    }

    function removeItem(index) {
      shoppingList.removeItem(index);
    }
  }
})();
