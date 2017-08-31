// app.shoppingListService.js

(function() {
  "use strict";

  angular.module("ShoppingListApp")
    .service("ShoppingListService", ShoppingListService);

  ShoppingListService.$inject = ["$q", "WeightLossFilterService"];

  function ShoppingListService($q, WeightLossFilterService) {
    let service = this;

    // List of Shopping items
    let items = [];

    service.addItem = addItem;
    service.getItems = getItems;

    function addItem(itemName, itemQuantity) {
      let promise = WeightLossFilterService.checkName(itemName);

      promise.then(response => {
        let nextPromise = WeightLossFilterService.checkQuantity(itemQuantity);

        nextPromise.then(result => {
          let item = {
            name: itemName,
            quantity: itemQuantity
          };

          items.push(item);
        }, errorResponse => {
          console.log(errorResponse.message);
        });
      }, errorResponse => {
        console.log(errorResponse.message);
      });
    }

    function getItems() {
      return items;
    }
  }
})();
