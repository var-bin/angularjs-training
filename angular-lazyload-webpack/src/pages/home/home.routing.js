"use strict";

const angular = require("angular");

function homeRouting($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state("home", {
      url: "/home",
      template: require("./views/home.html"), // include small templates into routing configuration
      resolve: {
        loadHomeModule: ($ocLazyLoad) => {
          return new Promise((resolve, reject) => {
            require.ensure([], () => {
              // load whole module
              let module = require("./home");

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
      }
    });
}

export default angular
  .module("home.routing", [])
  .config(homeRouting);
