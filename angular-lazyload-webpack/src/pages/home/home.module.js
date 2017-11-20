"use strict";

import { HOME_INDEX_MODULE } from "./index/index.module";
import { HOME_ABOUT_MODULE } from "./about/about.module";

export default angular
  .module("homeModule", [
    HOME_INDEX_MODULE,
    HOME_ABOUT_MODULE
  ]);
