// app.shoppingListComponent.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListComponentApp")
    .controller("ShoppingListComponentController", ShoppingListComponentController);

  ShoppingListComponentController.$inject = ["$element"];

  function ShoppingListComponentController($element) {
    let $ctrl = this;
    let totalSize;

    $ctrl.cookiesInList = cookiesInList;
    $ctrl.removeItem = removeItem;
    $ctrl.$onInit = $onInit;
    $ctrl.$onChanges = $onChanges;
    $ctrl.$doCheck = $doCheck;
    $ctrl.$postLink = $postLink;

    function showError() {
      const errorHolder = document.querySelector(".error");

      if (totalSize !== $ctrl.items.length) {
        totalSize = $ctrl.items.length;

        if (cookiesInList()) {
          errorHolder.classList.add("is-active");

          return;
        }

        errorHolder.classList.remove("is-active");
      }
    }

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

    function $onInit() {
      console.log("We are in $onInit()");
      totalSize = 0;
    }

    function $onChanges(changesObj) {
      console.log("We are in $onChanges()", changesObj);

      console.log("onChanges cookiesInList: ", );
      console.log("onChanges $element: ", $element);
    }

    function $doCheck() {
      console.log("We are in $doCheck()");
      showError();
    }

    function $postLink() {
      console.log("We are in $postLink()", $element);
      console.log("scope", $element.scope());
      console.log("isolateScope", $element.isolateScope());
      console.log("postLink cookiesInList: ", $ctrl.cookiesInList());
    }
  }
})();
