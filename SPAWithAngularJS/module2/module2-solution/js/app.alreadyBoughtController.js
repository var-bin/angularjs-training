// app.alreadyBoughtController.js

(function() {
  "use strict";

  angular.module("ShoppingListCheckOff")
    .controller("AlreadyBoughtController", AlreadyBoughtController);

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    let alreadyBoughtCtrl = this;

    alreadyBoughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
  }
})();
