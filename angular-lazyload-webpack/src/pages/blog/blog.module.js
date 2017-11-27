// blog.module.js

import { blogRouting } from "./blog.module.routing";
import { BlogService } from "./blog.service";

class BlogController {
  constructor(BlogService) {
    this.title = "BlogComponent";
    this.BlogService = BlogService;
    this.repos = [];

    this.getArticles();
  }

  getArticles() {
    this.BlogService.getData()
      .then((data) => {
        this.repos = data;
      });
  }
}

BlogController.$inject = ["BlogService"];

class BlogComponent {
  constructor() {
    this.template = require("./blog.view.html");
    this.controller = BlogController;
  }
}

const BLOG_MODULE = angular
  .module("blog.module", [])
  .component("blogComponent", new BlogComponent())
  .service("BlogService", BlogService)
  .config(blogRouting);

export { BLOG_MODULE };
