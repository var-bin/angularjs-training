// app.shoppingListAddController.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ShoppingListAddController", ShoppingListAddController);

  ShoppingListAddController.$inject = ["ShoppingListService"];

  function ShoppingListAddController(ShoppingListService) {
    let AddCtrl = this;

    AddCtrl.itemName = "";
    AddCtrl.itemQuantity = "";

    AddCtrl.addItem = addItem;

    function addItem() {
      ShoppingListService.addItem(AddCtrl.itemName, AddCtrl.itemQuantity);

      AddCtrl.itemName = "";
      AddCtrl.itemQuantity = "";
    }
  }
})();
