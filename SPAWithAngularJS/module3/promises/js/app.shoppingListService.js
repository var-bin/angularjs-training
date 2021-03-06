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

    /* function addItem(itemName, itemQuantity) {
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
    } */
    /* function addItem(itemName, itemQuantity) {
      let promise = WeightLossFilterService.checkName(itemName);

      promise
        .then(response => {
          return WeightLossFilterService.checkQuantity(itemQuantity);
        })
        .then(response => {
          let item = {
            name: itemName,
            quantity: itemQuantity
          };

          items.push(item);
        })
        .catch(errorResponse => {
          console.log(errorResponse.message);
        });
    } */
    function addItem(itemName, itemQuantity) {
      const namePromise = WeightLossFilterService.checkName(itemName);
      const quantityPromise = WeightLossFilterService.checkQuantity(itemQuantity);

      $q.all([namePromise, quantityPromise])
        .then(responce => {
          let item = {
            name: itemName,
            quantity: itemQuantity
          };

          items.push(item);
        })
        .catch(errorResponse => {
          console.log(errorResponse.message);
        });
    }

    function getItems() {
      return items;
    }
  }
})();
