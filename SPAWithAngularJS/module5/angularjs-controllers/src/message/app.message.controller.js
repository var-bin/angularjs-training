// app.message.controller.js

"use strict";

import { myApp } from "../app.module";

function MessageController() {
  let vm = this;

  vm.name = "Vitalii";
}

myApp
  .controller("MessageController", MessageController);
