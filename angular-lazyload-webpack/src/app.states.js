// app.states.js

"use strict";

const appBlog = {
  name: "blog",
  url: "/blog",
  component: "blogComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return System.import("./pages/blog/blog.module")
      .then(mod => $ocLazyLoad.load(mod.BLOG_MODULE));
  }
};

export { appBlog };
