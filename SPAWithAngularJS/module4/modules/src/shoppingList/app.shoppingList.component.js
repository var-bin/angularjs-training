// app.shoppingList.component.js

(function() {
  "use strict";

  angular.module("ShoppingList")
    .component("shoppingList", {
      templateUrl: "src/shoppingList/shoppingList.view.html",
      controller: "ShoppingListComponentController",
      bindings: {
        items: "<",
        title: "@",
        onRemove: "&"
      }
    });
})();
