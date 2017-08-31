// app.shoppingListServiceProvider.js

(function() {
  "use strict";

  angular.module("MyApp")
    .provider("ShoppingListService", ShoppingListServiceProvider);

  // If not specified, maxItems assumed unlimited
  function ShoppingListService(maxItems) {
    let service = this;

    // List of Shopping items
    let items = [];

    service.addItem = addItem;
    service.getItems = getItems;
    service.removeItem = removeItem;
    service.getMaxItems = getMaxItems;

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

    function getMaxItems() {
      return maxItems;
    }
  }

  function ShoppingListServiceProvider() {
    let provider = this;

    provider.default = {
      maxItems: 10
    };

    provider.$get = () => {
      const shoppingList = new ShoppingListService(provider.default.maxItems);

      return shoppingList;
    };
  }
})();
