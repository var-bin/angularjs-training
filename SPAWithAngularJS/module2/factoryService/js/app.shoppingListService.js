// app.shoppingListService.js

(function() {
  "use strict";

  angular.module("MyApp")
    .service("ShoppingListService", ShoppingListService);

  function ShoppingListService(maxItems) {
    let service = this;

    // List of Shopping items
    let items = [];

    service.addItem = addItem;
    service.getItems = getItems;
    service.removeItem = removeItem;

    function addItem(itemName, itemQuantity) {
      if (maxItems === undefined ||
          maxItems !== undefined && items.length < maxItems) {
        let item = {
          name: itemName,
          quantity: itemQuantity
        };

        items.push(item);
      } else {
        throw new Error(`Max items (${maxItems}) reached.`);
      }
    }

    function getItems() {
      return items;
    }

    function removeItem(itemIndex) {
      items.splice(itemIndex, 1);
    }
  }
});
