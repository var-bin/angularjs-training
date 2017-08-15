// app.js

(function() {
  "use strict";

  angular.module("myFirstApp", [])
    .controller("MyFirstController", MyFirstController);

  function MyFirstController() {
    let vm = this;

    vm.name = "Vitalii";
    /* $scope.sayHello = () => {
      return "Hello, world!";
    }; */
  }
})();
