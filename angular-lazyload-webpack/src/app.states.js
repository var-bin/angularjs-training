// app.states.js

"use strict";

const appBlog = {
  name: "blog",
  url: "/blog",
  component: "blogComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return new Promise((resolve, reject) => {
      require.ensure([], () => {
        // load whole module
        const module = require("./pages/blog/blog.module");

        $ocLazyLoad.load(module.BLOG_MODULE);

        if (module.BLOG_MODULE) {
          resolve(module.BLOG_MODULE);
        } else {
          reject("Ooops, somethig went wrong!");
        }
      });
    });
  }
};

export { appBlog };
