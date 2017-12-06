// app.routing.ts

"use strict";

import * as angular from "angular";
import { pdfState } from "./app.states";
import * as uiRouter from "angular-ui-router";

appRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function appRouting(
  $urlRouterProvider: uiRouter.IUrlRouterProvider,
  $stateProvider: uiRouter.IStateProvider
) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state(pdfState);
}

export { appRouting };
