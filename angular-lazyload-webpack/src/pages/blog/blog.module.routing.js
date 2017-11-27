// blog.module.routing.js

"use strict";

import { blog } from "./blog.module.states";

blogRouting.$inject = ["$urlRouterProvider", "$stateProvider"];

function blogRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider.state(blog);
}

export { blogRouting };
