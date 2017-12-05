// home.module.states.js

"use scrict";

const homeIndex = {
  name: "home",
  url: "/home",
  component: "homeComponent",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");


    return new Promise((resolve, reject) => {
      require.ensure(["./index/index.module"], () => {
        const mod: ng.IModule = require("./index/index.module");

        $ocLazyLoad.load({
          name: "home.module"
        });

        if (mod) {
          resolve(mod);
        } else {
          reject("Ooops, ther was something wrong...");
        }
      }, "index.module");
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
