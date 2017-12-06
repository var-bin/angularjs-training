// home.module.states.js

"use scrict";

import { UILazyLoad } from "../../core/helpers/uiLazyLoad";

const homeIndex = {
  name: "home",
  url: "/home",
  //component: "homeComponent",
  template: "<home-component></home-component>",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return new Promise((resolve, reject) => {
      require.ensure(["./index/index.module"], (require) => {
        const module: ng.IModule = require("./index/index.module");
        // AngularJS module name
        let moduleName: string | undefined;

        for (const key in module) {
          // AngularJS module constant has already in key
          if (module.hasOwnProperty(key)) {
            // AngularJS module name
            moduleName = module[key].name;
          }
        }

        if (moduleName) {
          $ocLazyLoad.load({
            name: moduleName
          });
        }

        if (module) {
          resolve(module);
        } else {
          reject("Ooops, ther was something wrong! Could you check AngularJS module name");
        }
      }, "index.module");
    });
  }
};

const homeAbout = {
  name: "home.about",
  url: "/about",
  //component: "homeAboutComponent",
  template: "<home-about-component></home-about-component>",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return new Promise((resolve, reject) => {
      require.ensure(["./about/about.module"], (require) => {
        const module: ng.IModule = require("./about/about.module");
        // AngularJS module name
        let moduleName: string | undefined;

        for (const key in module) {
          // AngularJS module constant has already in key
          if (module.hasOwnProperty(key)) {
            // AngularJS module name
            moduleName = module[key].name;
          }
        }

        if (moduleName) {
          $ocLazyLoad.load({
            name: moduleName
          });
        }

        if (module) {
          resolve(module);
        } else {
          reject("Ooops, ther was something wrong! Could you check AngularJS module name");
        }
      }, "about.module");
    });
  }
};

export { homeIndex, homeAbout };
