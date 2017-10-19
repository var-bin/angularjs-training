// app.message.controller.js

"use strict";

function MessageController() {
  let vm = this;

  vm.name = "Vitalii";
}

angular.module("myApp")
  .controller("MessageController", MessageController);
