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

      /* if (list.items.length) {
        list.items.forEach((item) => {
          const name = item.name;

          if (name.toLowerCase().indexOf(TRIGGERED_WORD) !== -1) {
            return true;
          }
        });

        return false;
      } */

      return true;
    }
  }
})();
