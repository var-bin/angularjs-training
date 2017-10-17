// app.spinner.component.js

(function() {
  "use strict";

  angular.module("ShoppingList")
  .component("shoppingListSpinner", {
    templateUrl: "src/spinner/spinner.view.html",
    controller: "SpinnerComponentController"
  });
})();
