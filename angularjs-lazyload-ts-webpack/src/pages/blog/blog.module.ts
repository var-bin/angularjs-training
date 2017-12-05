// blog.module.js

import angular from "angular";
import { BlogService } from "./blog.service";

class BlogController {
  public title: string = "BlogComponent";
  public repos: any[] = [];

  static $inject = ["BlogService"];

  constructor(public BlogService: BlogService) {}

  $onInit() {
    this.getArticles();
  }

  getArticles() {
    this.BlogService.getData()
      .then((data: any[]) => {
        this.repos = data;
      });
  }
}

class BlogComponent implements ng.IComponentOptions {
  public template: string = require("./blog.view.html");
  public controller: any = BlogController;

  constructor() {
    this.template = }
}

const BLOG_MODULE = angular
  .module("blog.module", [])
  .component("blogComponent", new BlogComponent())
  .service("BlogService", BlogService);

export { BLOG_MODULE };
