// app.nameCalculatorController.js

(function() {
  "use strict";

  angular.module("NameCalculator")
    .controller("NameCalculatorController", NameCalculatorController);

  function NameCalculatorController() {
    let vm = this;

    vm.name = "";
    vm.totalValue = 0;
    vm.displayNumeric = displayNumeric;

    function displayNumeric() {
      let totalNameValue = calculateNumericForString(vm.name);

      vm.totalValue = totalNameValue;
    }

    function calculateNumericForString(str) {
      let totalStringValue = 0;

      for (let i = 0; i < str.length; i++) {
        totalStringValue += str.charCodeAt(i);
      }

      return totalStringValue;
    }
  }
})();
