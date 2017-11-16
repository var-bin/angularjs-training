"use strict";

import { HOME_CTRL } from "./controllers/home.controller";
import { HOME_ABOUT_CTRL } from "./controllers/home.about.controller";

export default angular
  .module("home", [
    HOME_CTRL,
    HOME_ABOUT_CTRL
  ]);
