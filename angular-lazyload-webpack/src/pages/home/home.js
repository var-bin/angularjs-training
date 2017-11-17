"use strict";

import { HOME_MODULE } from "./controllers/home.controller";
import { HOME_ABOUT_CTRL } from "./controllers/home.about.controller";

export default angular
  .module("home", [
    HOME_MODULE,
    HOME_ABOUT_CTRL
  ]);
