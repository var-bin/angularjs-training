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
      //controller: "ShoppingListDirectiveController as ShoppingListDirectiveCtrl",
      controller: "ShoppingListDirectiveController",
      controllerAs: "ShoppingListDirectiveCtrl",
      bindToController: true
    };

    return ddo;
  }
})();
