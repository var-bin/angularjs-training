// app.module.ts

"use strict";

import * as angular from "angular";
import { Message1Component } from "./message1/app.message1.controller";
import "./repositories/app.repositories.module";

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

angular.module("myApp", ["ui.router", "myApp.repositories"])
  .component("message1Component", new Message1Component())
  .config(RoutesConfig);
