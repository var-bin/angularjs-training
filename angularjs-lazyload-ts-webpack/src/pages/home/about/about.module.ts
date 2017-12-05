// about.module.js

"use strict";

import angular from "angular";

class HomeAboutController {
  public title: string = "HomeAboutComponent";

  constructor() {}
}

class HomeAboutComponent implements ng.IComponentOptions {
  public template: string = require("./about.view.html");
  public controller: any = HomeAboutController;

  constructor() {}
}

const HOME_ABOUT_MODULE = angular
  .module("home.about.module", [])
  .component("homeAboutComponent", new HomeAboutComponent());

export { HOME_ABOUT_MODULE };
