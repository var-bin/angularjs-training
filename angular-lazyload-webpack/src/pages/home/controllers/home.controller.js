"use strict";

class HomeController {
  constructor() {}
}

const HOME_CTRL = angular
  .module("home.controller", [])
  .controller("HomeController", HomeController);

export { HOME_CTRL };
