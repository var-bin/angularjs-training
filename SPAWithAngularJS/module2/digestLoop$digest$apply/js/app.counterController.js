// app.counterController.js

(function() {
  "use strict";

  angular.module("CounterApp")
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope", "$timeout"];

  function CounterController($scope, $timeout) {
    let vm = this;

    vm.counter = 0;
    vm.upCounter = upCounter;
    vm.upCounterApply = upCounterApply;
    vm.upCounter$timeout = upCounter$timeout;

    function upCounter() {
      setTimeout(function() {
        vm.counter++;

        console.log("Counter incremented $scope.$digest!");

        $scope.$digest();
      }, 2000);
    }

    function upCounterApply() {
      setTimeout(function() {

        $scope.$apply(function() {
          vm.counter++;

          console.log("Counter incremented $scope.$apply!");
        });
      }, 2000);
    }

    function upCounter$timeout() {
      $timeout(function() {
        vm.counter++;

        console.log("Counter incremented $timeout!");
      }, 2000);
    }
  }
})();
