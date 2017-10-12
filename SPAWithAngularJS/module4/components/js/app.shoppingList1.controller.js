// app.shoppingList1.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListComponentApp")
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
      setListTitle();

      list.itemName = "";
      list.itemQuantity = "";
    }

    function removeItem(index) {
      list.lastRemoved = `Last removed item was: ${list.items[index].name}`;

      shoppingList.removeItem(index);
      setListTitle();
    }

    function setListTitle() {
      list.title = `( ${shoppingList.getItemsSize()} items )`;
    }
  }
})();
