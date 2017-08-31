// app.shoppingListCheckOffService.js

(function() {
  "use strict";

  angular.module("ShoppingListCheckOff")
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    let service = this;

    let toBuyItems = [
      {
        name: "cookies",
        quantity: 10
      },
      {
        name: "sugar drinks",
        quantity: 5
      },
      {
        name: "chips",
        quantity: 3
      }
    ];
    let boughtItems = [];

    service.getToBuyItems = getToBuyItems;
    service.bought = bought;
    service.addToBoughtItems = addToBoughtItems;
    service.getBoughtItems = getBoughtItems;

    function getToBuyItems() {
      return toBuyItems;
    }

    function bought(itemIndex) {
      toBuyItems.splice(itemIndex, 1);
    }

    function addToBoughtItems(item) {
      boughtItems.push(item);
    }

    function getBoughtItems() {
      return boughtItems;
    }
  }
})();
