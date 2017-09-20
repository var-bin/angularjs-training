// app.shoppingListDirectiveController.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .controller("ShoppingListDirectiveController", ShoppingListDirectiveController);

  function ShoppingListDirectiveController() {
    let list = this;

    list.cookiesInList = cookiesInList;

    function cookiesInList() {
      const TRIGGERED_WORD = "cookie";

      if (list.list.items.length) {
        for (let i = 0; i < list.list.items.length; i++) {
          const name = list.list.items[i].name;

          if (name.toLowerCase().indexOf(TRIGGERED_WORD) !== -1) {
            return true;
          }
        }
      }

      return false;
    }
  }
})();
