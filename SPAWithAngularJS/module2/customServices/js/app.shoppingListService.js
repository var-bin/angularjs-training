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
    service.getItems = getItems;
    service.removeItem = removeItem;

    function addItem(itemName, itemQuantity) {
      let item = {
        name: itemName,
        quantity: itemQuantity
      };

      items.push(item);
    }

    function getItems() {
      return items;
    }

    function removeItem(itemIndex) {
      items.splice(itemIndex, 1);
    }
  }
})();
