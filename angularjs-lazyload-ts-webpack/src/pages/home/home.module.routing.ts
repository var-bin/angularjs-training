// home.module.routing.js

"use strict";

import * as angular from "angular";
import { homeIndex, homeAbout } from "./home.module.states";
import * as uiRouter from "angular-ui-router";

homeRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function homeRouting(
  $urlRouterProvider: uiRouter.IUrlRouterProvider,
  $stateProvider: uiRouter.IStateProvider
) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state(homeIndex);
  $stateProvider.state(homeAbout);
}

export { homeRouting };
