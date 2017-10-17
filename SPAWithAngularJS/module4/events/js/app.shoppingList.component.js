// app.shoppingList.component.js

(function() {
  "use strict";

  angular.module("ShoppingListEventsApp")
    .component("shoppingList", {
      templateUrl: "../templates/shoppingList.view.html",
      controller: "ShoppingListComponentController",
      bindings: {
        items: "<",
        title: "@",
        onRemove: "&"
      }
    });
})();
