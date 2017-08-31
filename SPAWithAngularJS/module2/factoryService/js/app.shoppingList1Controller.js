// app.shoppingList1Controller.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ShoppingList1Controller", ShoppingList1Controller);

  ShoppingList1Controller.$inject = ["ShoppingListFactory"];

  function ShoppingList1Controller(ShoppingListFactory) {
    let list1 = this;

    // Use factory to create new shopping list service
    const shoppingList = ShoppingListFactory();

    list1.items = shoppingList.getItems();


    list1.addItem = addItem;
    list1.removeItem = removeItem;

    function addItem() {
      shoppingList.addItem(list1.itemName, list1.itemQuantity);

      list1.itemName = "";
      list1.itemQuantity = "";
    }

    function removeItem(index) {
      shoppingList.removeItem(index);
    }
  }
})();
