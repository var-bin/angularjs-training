// bootstrap.js

"use strict";

import { LAZY_APP } from "../app";

angular.bootstrap(document, [LAZY_APP.name], {
  strictDi: true
});
