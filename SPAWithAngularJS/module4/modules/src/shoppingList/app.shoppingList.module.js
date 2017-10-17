// app.shoppingList.module.js

(function() {
  "use strict";

  angular.module("ShoppingList", ["Spinner"])
    .config(() => {
      console.log("ShoppingList Module config");
    })
    .run(() => {
      console.log("ShoppingList Module run");
    });
})();
