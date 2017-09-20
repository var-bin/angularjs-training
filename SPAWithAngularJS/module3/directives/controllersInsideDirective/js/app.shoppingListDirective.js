// app.shoppingListDirective.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .directive("shoppingList", ShoppingList);

  function ShoppingList() {
    const templateUrl = "../templates/shoppingList.view.html";
    const ddo = {
      restrict: "E",
      templateUrl,
      scope: {
        list: "<",
        title: "@"
      },
      controller: "ShoppingListDirectiveController as l",
      bindToController: true
    };

    return ddo;
  }
})();
