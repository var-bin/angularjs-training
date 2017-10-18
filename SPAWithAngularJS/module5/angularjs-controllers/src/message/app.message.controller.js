// message.controller.js

(function() {
  "use strict";

  angular.module("myApp")
    .controller("MessageController", MessageController);

  function MessageController() {
    let vm = this;

    vm.name = "Vitalii";
  }
})();
