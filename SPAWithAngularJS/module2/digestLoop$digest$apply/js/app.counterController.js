// app.counterController.js

(function() {
  "use strict";

  angular.module("CounterApp")
    .controller("CounterController", CounterController);

  CounterController.$inject = ["$scope"];

  function CounterController($scope) {
    let vm = this;

  }
})();
