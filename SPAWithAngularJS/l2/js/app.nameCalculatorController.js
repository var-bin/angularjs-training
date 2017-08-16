// app.nameCalculatorController.js

(function() {
  "use strict";

  angular.module("NameCalculator")
    .controller("NameCalculatorController", NameCalculatorController);

  function NameCalculatorController() {
    let vm = this;

    vm.name = "";
    vm.totalValue = 0;
  }
})();
