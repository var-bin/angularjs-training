// app.module.ts

"use strict";

import { module } from "angular";

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

function RoutesConfig(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  const message1State: angular.ui.IState = {
    name: "message1",
    url: "/message1",
    component: "message1Component"
  };

  const home: angular.ui.IState = {
    name: "home",
    url: "/"
  };

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise("/");

  $stateProvider.state(message1State);
  $stateProvider.state(home);
}

const myAppModule = module("myApp", ["ui.router"])
  .config(RoutesConfig);

export { myAppModule };
