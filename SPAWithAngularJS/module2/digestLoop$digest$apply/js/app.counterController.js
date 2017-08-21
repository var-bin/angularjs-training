// app.counterController.js

(function() {
  "use strict";

  angular.module("CounterApp")
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];

  function CounterController($scope) {
    let vm = this;

    vm.counter = 0;
    vm.upCounter = upCounter;

    function upCounter() {
      vm.counter++;
    }
  }
})();
