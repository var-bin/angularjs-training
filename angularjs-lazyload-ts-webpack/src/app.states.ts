// app.states.ts

const pdfState = {
  name: "pdf",
  url: "/pdf",
  template: "<pdf-component></pdf-component>",
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");

    return new Promise((resolve, reject) => {
      require.ensure(["./pages/pdf/pdf.module"], (require) => {
        const module: ng.IModule = require("./pages/pdf/pdf.module");
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
      }, "pdf.module");
    });
  }
};

export { pdfState };
