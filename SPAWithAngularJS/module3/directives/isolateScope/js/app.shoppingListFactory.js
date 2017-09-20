// app.shoppingListFactory.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .factory("ShoppingListFactory", ShoppingListFactory);

  function ShoppingListService(maxItems) {
    let service = this;

    // List of Shopping items
    let items = [];

    service.addItem = addItem;
    service.getItems = getItems;
    service.removeItem = removeItem;
    service.getItemsSize = getItemsSize;

    function addItem(itemName, itemQuantity) {
      // !maxItems -> maxItems === undefuned
      // maxItems -> maxItems !== undefuned

      if (!maxItems ||
          maxItems && items.length < maxItems) {
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

    function getItemsSize() {
      return items.length;
    }
  }

  function ShoppingListFactory() {
    const factory = maxItems => {
      return new ShoppingListService(maxItems);
    };

    return factory;
  }
})();
