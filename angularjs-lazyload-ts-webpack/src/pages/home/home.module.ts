// home.module.js

"use strict";

import * as angular from "angular";
import { homeRouting } from "./home.module.routing";

const HOME_MODULE = angular
  .module("homeModule", [])
  .config(homeRouting);

export { HOME_MODULE };
