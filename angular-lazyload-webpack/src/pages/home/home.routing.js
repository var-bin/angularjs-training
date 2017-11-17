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
            const module = require("./home");

            $ocLazyLoad.load({
              name: "home"
            });

            if (module.name) {
              resolve(module.name);
            } else {
              reject("Ooops, somethig went wrong!");
            }
          });
        });
      }
    })

    .state("home.about", {
      url: "/about",
      template: require("./views/home.about.html"),
      controller: "HomeAboutController as vm",
    });
}

export default angular
  .module("home.routing", [])
  .config(homeRouting);
