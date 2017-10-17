// app.spinnerComponent.controller.js

(function() {
  "use strict";

  angular.module("ShoppingListEventsApp")
    .controller("SpinnerComponentController", SpinnerComponentController);

  SpinnerComponentController.$inject = ["$rootScope"];

  function SpinnerComponentController($rootScope) {
    let $ctrl = this;
    const onOff = false;
    let cancelHandler;

    $ctrl.$doCheck = $doCheck;
    $ctrl.$onDestroy = $onDestroy;

    function showSpinner() {
      const spinnerHolder = document.querySelector(".l-spinner");

      cancelHandler = $rootScope.$on("shoppinglist:processing", (event, data) => {
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

    function $onDestroy() {
      cancelHandler();
    }
  }
})();
