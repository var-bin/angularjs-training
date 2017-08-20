// app.filterController.js

(function() {
  "use strict";

  angular.module("myApp")
    .controller("filterController", FilterController);

  FilterController.$inject = ["lovesFilter", "truthFilter"];

  function FilterController(lovesFilter) {
    let vm = this;

    const originalMessage = "Vitalii loves cookies";

    vm.sayLovesMessage = sayLovesMessage;
    vm.sayMessage = sayMessage;

    function sayMessage() {
      return originalMessage;
    }

    function sayLovesMessage() {
      let message = lovesFilter(originalMessage);

      return message;
    }
  }
})();
