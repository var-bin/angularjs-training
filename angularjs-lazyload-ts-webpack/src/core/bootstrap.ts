// bootstrap.js

"use strict";

import * as angular from "angular";
import { LAZY_APP } from "../app";

angular.bootstrap(document, [LAZY_APP.name], {
  strictDi: true
});
