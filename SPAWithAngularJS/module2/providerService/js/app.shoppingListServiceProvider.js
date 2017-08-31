// app.shoppingListServiceProvider.js

(function() {
  "use strict";

  angular.module("MyApp")
    .provider("ShoppingListService", ShoppingListService);

  function ShoppingListService() {}
})();
