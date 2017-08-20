// app.truthFilter.js

(function() {
  "use strict";

  angular.module("myApp")
    .filter("truth", TruthFilter);

  function TruthFilter() {
    return function(input, target, replace) {
      input = input || "";
      let output = input.replace(target, replace);

      return output;
    };
  }
})();
