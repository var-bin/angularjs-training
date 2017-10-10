// app.shoppingListComponent.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListComponentApp")
    .controller("ShoppingListComponentController", ShoppingListComponentController);

  function ShoppingListComponentController() {
    let $ctrl = this;

    $ctrl.cookiesInList = cookiesInList;
    $ctrl.removeItem = removeItem;

    function cookiesInList() {
      const TRIGGERED_WORD = "cookie";

      for (let item of $ctrl.items) {
        if (item.name.toLowerCase().indexOf(TRIGGERED_WORD) !== -1) {
          return true;
        }
      }

      return false;
    }

    function removeItem(itemIndex) {
      // comes from onRemove bindings property
      // and take method from the parenrt controller
      $ctrl.onRemove({
        index: itemIndex
      })
    }
  }
})();
