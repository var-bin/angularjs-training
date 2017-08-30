// app.shoppingListFactory.js

(function() {
  "use strict";

  angular.module("MyApp")
    .factory("ShoppingListFactory", ShoppingListFactory);

  function ShoppingListFactory(maxItems) {
    let factory = this;

    // List of Shopping items
    let items = [];

    factory.addItem = addItem;
    factory.getItems = getItems;
    factory.removeItem = removeItem;

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
