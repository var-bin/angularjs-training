"use strict";

class HomeAboutController {
  constructor() {}
}

const HOME_ABOUT_CTRL = angular
  .module("home.about.module", [])
  .controller("HomeAboutController", HomeAboutController);

export { HOME_ABOUT_CTRL };
