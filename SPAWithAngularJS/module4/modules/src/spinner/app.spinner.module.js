// app.spinner.module.js

(function() {
  "use strict";

  angular.module("Spinner", [])
    .config(() => {
      console.log("Spinner Module config");
    })
    .run(() => {
      console.log("Spinner Module run");
    });
})();
