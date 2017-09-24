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
        items: "<",
        title: "@",
        onRemove: "&"
      },
      controller: "ShoppingListDirectiveController",
      controllerAs: "ShoppingListDirectiveCtrl",
      bindToController: true,
      link: ShoppingListDirectiveLink
    };

    return ddo;
  }

  function ShoppingListDirectiveLink(scope, element, attr, controller) {
    console.log("Link scope is: ", scope);
    console.log("Element is: ", element);
    console.log("Controller is: ", controller);

    scope.$watch("ShoppingListDirectiveCtrl.cookiesInList()", (newValue, oldValue) => {
      console.log("Old value is: ", oldValue);
      console.log("New value is: ", newValue);

      if (newValue) {
        displayCookieWarning(element[0].lastElementChild);
      } else {
        removeCookieWarning(element[0].lastElementChild);
      }

    });

    function displayCookieWarning(errorMessageContainer) {
      console.log(errorMessageContainer);
      errorMessageContainer.classList.add("is-active");
    }

    function removeCookieWarning(errorMessageContainer) {
      console.log(errorMessageContainer);
      errorMessageContainer.classList.remove("is-active");
    }
  }
})();
