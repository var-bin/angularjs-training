"use strict";

const angular = require("angular");

function homeRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url: "/home",
      //template: require("./views/home.html"), // include small templates into routing configuration
      component: "homeComponent",
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

        return new Promise((resolve, reject) => {
          require.ensure([], () => {
            // load whole module
            const module = require("./home.module");

            $ocLazyLoad.load({
              name: "homeModule"
            });

            if (module.HOME_MODULE) {
              resolve(module.HOME_MODULE);
            } else {
              reject("Ooops, somethig went wrong!");
            }
          });
        });
      }
    })

    .state("home.about", {
      url: "/about",
      component: "homeAboutComponent"
    });
}

export default angular
  .module("home.module.routing", [])
  .config(homeRouting);
