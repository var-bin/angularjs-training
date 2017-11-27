// blog.module.js

import { blogRouting } from "./blog.module.routing";

class BlogController {
  constructor() {
    this.title = "BlogComponent";
  }
}

class BlogComponent {
  constructor() {
    this.template = require("./blog.view.html");
    this.controller = BlogController;
  }
}

const BLOG_MODULE = angular
  .module("blog.module", [])
  .component("blogComponent", new BlogComponent())
  .config(blogRouting);

export { BLOG_MODULE };
