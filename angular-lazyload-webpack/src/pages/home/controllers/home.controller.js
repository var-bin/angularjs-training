"use strict";

class HomeController {
  constructor() {}
}

const homeComponent = {
  template: require("../views/home.html"),
  controller: HomeController
};

const HOME_MODULE = angular
  .module("home.module", [])
  .component("homeComponent", homeComponent);

export { HOME_MODULE };
