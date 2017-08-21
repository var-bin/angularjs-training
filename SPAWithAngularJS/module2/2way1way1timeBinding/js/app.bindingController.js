// app.bindingController.js

(function() {
  "use strict";

  angular.module("BindingApp")
    .controller("BindingController", BindingController);

  BindingController.$inject = ["$scope"];

  function BindingController($scope) {
    let vm = this;

    vm.firstName = "Vitalii";
    //vm.fullName = "";
    vm.showNumberOfWatchers = showNumberOfWatchers;
    vm.setFullName = setFullName;
    vm.logFirstName = logFirstName;
    vm.logFullName = logFullName;

    function showNumberOfWatchers() {
      console.log("# of Watchers", $scope.$$watchersCount);
    }

    function setFullName() {
      vm.fullName = `${vm.firstName} Rybka`;
    }

    function logFirstName() {
      console.log(`First name is: ${vm.firstName}`);
    }

    function logFullName() {
      console.log(`Full name is: ${vm.fullName}`);
    }

    $scope.$watch(() => {
      console.log("Digest Loop Fired!!!");
    });
  }
})();
