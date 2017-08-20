// app.lovesFilter.js

(function() {
  "use strict";

  angular.module("myApp")
    .filter("loves", LovesFilter);

  function LovesFilter() {
    return function(input) {
      input = input || "";
      let output = input.replace("loves", "likes");

      return output;
    };
  }
})();
