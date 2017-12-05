// index.module.js

"use strict";

import "./index.styles.css";
import angular from "angular";

class HomeIndexController {
  public title: string = "HomeComponent";

  constructor() {}
}

class HomeIndexComponent implements ng.IComponentOptions {
  public template: string = require("./index.view.html")
  public controller: any = HomeIndexController;
  constructor() {}
}

const HOME_INDEX_MODULE = angular
  .module("home.module", [])
  .component("homeComponent", new HomeIndexComponent());

export { HOME_INDEX_MODULE };
