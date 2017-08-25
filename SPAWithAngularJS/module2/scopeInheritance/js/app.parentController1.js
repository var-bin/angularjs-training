// app.parentController1.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("ParentController1", ParentController1)
    .controller("ChildController1", ChildController1)
    .controller("ParentController2", ParentController2)
    .controller("ChildController2", ChildController2);

  ParentController1.$inject = ["$scope"];

  function ParentController1($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
  }

  ChildController1.$inject = ["$scope"];

  function ChildController1($scope) {
    console.log("$scope.parentValue: ", $scope.parentValue);
    console.log("CHILD $scope: ", $scope);
  }

  function ParentController2() {}

  function ChildController2() {}
})();
