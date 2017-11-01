// app.module.ts

"use strict";

import { module } from "angular";
import uiRoute from "@uirouter/angularjs";

routingConfig.$inject = ["$stateProvider"];

function routingConfig($stateProvider: angular.ui.IStateProvider) {
  const message1State: angular.ui.IState = {
    name: "message1",
    url: "/message1",
    template: "<message-1-component></message-1-component>"
  };

  const home: angular.ui.IState = {
    name: "home",
    url: "/"
  };

  $stateProvider.state(message1State);
  $stateProvider.state(home);
}

const myApp = module("myApp", [uiRoute])
  .config(routingConfig);

export { myApp };
