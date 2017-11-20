"use strict";

import { HOME_INDEX_MODULE } from "./index/index.module";
import { HOME_ABOUT_MODULE } from "./about/about.module";

const HOME_MODULE =  angular
  .module("homeModule", [
    HOME_INDEX_MODULE,
    HOME_ABOUT_MODULE
  ]);

export { HOME_MODULE };
