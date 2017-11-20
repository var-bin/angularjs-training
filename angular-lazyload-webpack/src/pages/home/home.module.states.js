// home.module.states.js

"use scrict";

const homeIndex = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return new Promise((resolve, reject) => {
      require.ensure([], () => {
        // load whole module
        const module = require("./index/index.module");

        $ocLazyLoad.load(module.HOME_INDEX_MODULE);

        if (module.HOME_INDEX_MODULE) {
          resolve(module.HOME_INDEX_MODULE);
        } else {
          reject("Ooops, somethig went wrong!");
        }
      });
    });
  }
};

const homeAbout = {
  name: "home.about",
  url: "/about",
  component: "homeAboutComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return new Promise((resolve, reject) => {
      require.ensure([], () => {
        // load whole module
        const module = require("./about/about.module");

        $ocLazyLoad.load(module.HOME_ABOUT_MODULE);

        if (module.HOME_ABOUT_MODULE) {
          resolve(module.HOME_ABOUT_MODULE);
        } else {
          reject("Ooops, somethig went wrong!");
        }
      });
    });
  }
};

export { homeIndex, homeAbout };
