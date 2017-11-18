"use strict";

class HomeController {
  constructor() {
    this.title = "HomeComponent";
  }
}

class HomeComponent {
  constructor() {
    this.template = require("../views/home.html");
    this.controller = HomeController;
  }
}

const HOME_MODULE = angular
  .module("home.module", [])
  .component("homeComponent", new HomeComponent());

export { HOME_MODULE };
