// app.js

"use strict";

const angular = require("angular");
require("@uirouter/angularjs");
require("oclazyload");

import { HOME_MODULE } from "./pages/home/home.module"

export default angular
  .module("lazyApp", [
    "ui.router",
    "oc.lazyLoad",
    "homeModule"
  ]);
