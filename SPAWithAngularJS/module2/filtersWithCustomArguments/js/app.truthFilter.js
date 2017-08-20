// app.truthFilter.js

(function() {
  "use strict";

  angular.module("myApp")
    .filter("loves", TruthFilter);

  function TruthFilter() {
    return function(input) {

      return input;
    };
  }
})();
