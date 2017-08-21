// app.counterController.js

(function() {
  "use strict";

  angular.module("CounterApp")
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];

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

    $scope.$watch("onceCount", (newValue, oldValue) => {
      console.log("onceCount newValue: ", newValue);
      console.log("onceCount oldValue: ", oldValue);
    });

    $scope.$watch("counter", (newValue, oldValue) => {
      console.log("counter newValue: ", newValue);
      console.log("counter oldValue: ", oldValue);
    });
  }
})();
