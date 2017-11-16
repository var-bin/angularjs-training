"use strict";

const angular = require("angular");
require("@uirouter/angularjs");
require("oclazyload");

const HOME_ROUTING = require("./pages/home/home.routing");

export default angular
  .module("lazyApp", [
    "ui.router",
    "oc.lazyLoad",
    HOME_ROUTING.name
  ]);
