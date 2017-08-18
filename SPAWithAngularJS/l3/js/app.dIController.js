// app.dIController.js

(function() {
  "use strict";

  angular.module("DIApp")
    .controller("DIController", DIController);

  DIController.$inject = ["$filter"];

  function DIController($filter) {
    let vm = this;

    vm.name = "Vitalii";
    vm.upper = upper;

    function upper() {
      const upCase = $filter("uppercase");

      vm.name = upCase(vm.name);
    }
  }
})();
