// app.module.ts

"use strict";

import * as angular from "angular";
import "@uirouter/angularjs";
import { Message1Component } from "./message1/app.message1.controller";
import "oclazyload";

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

  const repositoriesState = {
    name: "repositories",
    url: "/repositories",
    component: "repositoriesComponent",
    lazyLoad: ($transition$) => {
      const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

      return import("./repositories/app.repositories.module")
        .then(mod => $ocLazyLoad.load(mod.myApp_Repositories))
        .catch(err => {
          throw new Error("Ooops, something went wrong, " + err);
        });
    }
  };

  // Redirect to home if no other URL matches
  $urlRouterProvider.otherwise("/");

  $stateProvider.state(message1State);
  $stateProvider.state(homeState);
  $stateProvider.state(repositoriesState);
}

angular.module("myApp", ["ui.router", "oc.lazyLoad"])
  .component("message1Component", new Message1Component())
  .config(RoutesConfig);
