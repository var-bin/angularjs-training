// app.module.ts

"use strict";

import { module } from "angular";
import uiRoute from "@uirouter/angularjs";

const myApp = module("myApp", [uiRoute])
  .config(routingConfig);

routingConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function routingConfig(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  const message1State: angular.ui.IState = {
    name: "message1",
    url: "/message1",
    template: "<message-1-component></message-1-component>"
  };

  const home: angular.ui.IState = {
    name: "home",
    url: "/"
  }

  $stateProvider.state(message1State);
  $stateProvider.state(home);

  $urlRouterProvider.otherwise("home");
}

export { myApp };
