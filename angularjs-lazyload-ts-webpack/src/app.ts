// app.js

"use strict";

import angular from "angular";
import "@uirouter/angularjs";
import "oclazyload";

const LAZY_APP =  angular
  .module("lazyApp", [
    "ui.router",
    "oc.lazyLoad"
  ]);

export { LAZY_APP };
