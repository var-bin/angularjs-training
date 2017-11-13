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
    component: "message1Component",
    resolve: {
      myData: () => "This data comes from resolve property ui-router"
    }
  };

  const homeState: angular.ui.IState = {
    name: "home",
    url: "/"
  };

  const repositoriesState: angular.ui.IState = {
    name: "repositories",
    url: "/repositories",
    component: "repositoriesComponent"
  };

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise("/");

  $stateProvider.state(message1State);
  $stateProvider.state(homeState);
  $stateProvider.state(repositoriesState);
}

const myAppModule = module("myApp", ["ui.router"])
  .config(RoutesConfig);

export { myAppModule };
