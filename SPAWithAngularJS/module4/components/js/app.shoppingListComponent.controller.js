// app.shoppingListComponent.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListComponentApp")
    .controller("ShoppingListComponentController", ShoppingListComponentController);

  function ShoppingListComponentController() {
    let $ctrl = this;

    $ctrl.cookiesInList = cookiesInList;

    function cookiesInList() {
      console.log($ctrl.items.length);
    }
  }
})();
