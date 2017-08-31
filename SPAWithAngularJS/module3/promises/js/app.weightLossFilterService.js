// app.weightLossFilterService.js

(function() {
  "use strict";

  angular.module("ShoppingListApp")
    .service("WeightLossFilterService", WeightLossFilterService);

  WeightLossFilterService.$inject = ["$q", "$timeout"];

  function WeightLossFilterService($q, timeout) {
    let service = this;

    service.checkName = checkName;
    service.checkQuantity = checkQuantity;

    function checkName(name) {
      const deferred = $q.defer();

      let result = {
        message: ""
      };

      $timeout(() => {
        // Check for cookies
        if (name.toLowerCase().indexOf("cookie") === -1) {
          deferred.resolve(result);
        } else {
          result.message = "Stay away from cookies, Vitalii!";
          deferred.reject(result);
        }
      }, 3000);

      return deferred.promise;
    }

    function checkQuantity(quantity) {
      const deferred = $q.defer();

      let result = {
        message: ""
      };

      $timeout(() => {
        if (quantity < 6) {
          deferred.resolve(result);
        } else {
          result.message = "That's too much, Vitalii!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    }
  }
})();
