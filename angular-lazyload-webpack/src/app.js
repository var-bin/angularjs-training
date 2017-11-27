// app.js

"use strict";

import angular from "angular";
import "@uirouter/angularjs";
import "oclazyload";

import { HOME_MODULE } from "./pages/home/home.module";
import { BLOG_MODULE } from "./pages/blog/blog.module";

const LAZY_APP =  angular
  .module("lazyApp", [
    "ui.router",
    "oc.lazyLoad",
    "homeModule",
    BLOG_MODULE.name
  ]);

export { LAZY_APP };
