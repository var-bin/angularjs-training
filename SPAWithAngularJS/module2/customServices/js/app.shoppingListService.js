// app.shoppingListService.js

(function() {
  "use strict";

  angular.module("MyApp")
    .service("ShoppingListService", ShoppingListService);

  function ShoppingListService() {
    let service = this;

    // List of Shopping items
    let items = [];

    service.addItem = addItem;

    function addItem(itemName, itemQuantity) {
      console.log("ShoppingListService", itemName, itemQuantity);

      let item = {
        name: itemName,
        quantity: itemQuantity
      };

      items.push(item);
    }

    service.getItems = getItems;

    function getItems() {
      return items;
    }
  }
})();
