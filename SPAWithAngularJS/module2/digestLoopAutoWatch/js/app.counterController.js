// app.counterController.js

(function() {
  "use strict";

  angular.module("CounterApp")
    .controller("CounterController", CounterController);

  /* CounterController.$inject = ["$scope"];

  function CounterController($scope) {
    $scope.onceCount = 0;
    $scope.counter = 0;

    $scope.showNumberOfWatchers = showNumberOfWatchers;
    $scope.countOnce = countOnce;
    $scope.increment = increment;

    function showNumberOfWatchers() {
      console.log("# of Watchers", $scope.$$watchersCount);
    }

    function countOnce() {
      $scope.onceCount = 1;
    }

    function increment() {
      $scope.counter++;
    }
  } */

  CounterController.$inject = ["$scope"];

  function CounterController($scope) {
    let vm = this;

    vm.onceCount = 0;
    vm.counter = 0;
    vm.name = "Vitalii";

    vm.showNumberOfWatchers = showNumberOfWatchers;
    vm.countOnce = countOnce;
    vm.increment = increment;

    function showNumberOfWatchers() {
      console.log("# of Watchers", $scope.$$watchersCount);
    }

    function countOnce() {
      vm.onceCount = 1;
    }

    function increment() {
      vm.counter++;
    }

    $scope.$watch(() => {
      console.log("Digest Loop Fired!!!");
    });
  }
})();
