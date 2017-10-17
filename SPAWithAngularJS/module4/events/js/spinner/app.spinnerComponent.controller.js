// app.spinnerComponent.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListEventsApp")
    .controller("SpinnerComponentController", SpinnerComponentController);

  SpinnerComponentController.$inject = ["$rootScope"];

  function SpinnerComponentController($rootScope) {
    let $ctrl = this;
    const onOff = false;

    $ctrl.$doCheck = $doCheck;

    function showSpinner() {
      const spinnerHolder = document.querySelector(".l-spinner");

      $rootScope.$on("shoppinglist:processing", (event, data) => {
        console.log("Event: ", event);
        console.log("Data: ", data);

        if (data.on) {
          spinnerHolder.classList.add("is-active");

          return;
        }

        spinnerHolder.classList.remove("is-active");
      });
    }

    function $doCheck() {
      showSpinner();
    }
  }
})();
