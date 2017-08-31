// app.toBuyController.js

(function() {
  "use strict";

  angular.module("ShoppingListCheckOff")
    .controller("ToBuyController", ToBuyController);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];

  function ToBuyController(ShoppingListCheckOffService) {
    let toBuyCtrl = this;

    toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyCtrl.onBought = onBought;

    function onBought(itemIndex) {
      ShoppingListCheckOffService.addToBoughtItems(toBuyCtrl.items[itemIndex]);
      ShoppingListCheckOffService.bought(itemIndex);
    }
  }
})();
