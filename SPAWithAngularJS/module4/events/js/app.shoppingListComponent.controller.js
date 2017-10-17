// app.shoppingListComponent.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListEventsApp")
    .controller("ShoppingListComponentController", ShoppingListComponentController);

  ShoppingListComponentController.$inject = ["$rootScope", "$q", "WeightLossFilterService"];

  function ShoppingListComponentController($rootScope, $q, WeightLossFilterService) {
    let $ctrl = this;
    let totalSize;

    $ctrl.removeItem = removeItem;
    $ctrl.$onInit = $onInit;
    $ctrl.$doCheck = $doCheck;

    function cookiesInList() {
      const errorHolder = document.querySelector(".error");

      if ($ctrl.items.length !== totalSize) {
        totalSize = $ctrl.items.length;

        $rootScope.$broadcast("shoppinglist:processing", {
          on: true
        });

        let promises = [];

        for (let i = 0; i < $ctrl.items.length; i++) {
          promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
        }

        $q.all(promises)
          .then((result) => {
            // Remove cookie warning
            console.log("result: ", result);
            errorHolder.classList.remove("is-active");
          }).catch((error) => {
            // Show cookie warning
            $ctrl.cookieErrorMessage = error.message;
            errorHolder.classList.add("is-active");
          }).finally(() => {
            $rootScope.$broadcast("shoppinglist:processing", {
              on: false
            });
          });
      }
    }

    function removeItem(itemIndex) {
      // comes from onRemove bindings property
      // and take method from the parenrt controller
      $ctrl.onRemove({
        index: itemIndex
      })
    }

    function $onInit() {
      totalSize = 0;
    }

    function $doCheck() {
      cookiesInList();
    }
  }
})();
