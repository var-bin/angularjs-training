// app.states.js

"use strict";

const appBlog = {
  name: "blog",
  url: "/blog",
  component: "blogComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
    const blogModule = () => import(/* webpackChunkName: "blog.module" */ "./pages/blog/blog.module");

    return blogModule()
      .then(mod => $ocLazyLoad.load(mod.BLOG_MODULE))
      .catch(err => console.error("Ooops... ", err));
  }
};

export { appBlog };
