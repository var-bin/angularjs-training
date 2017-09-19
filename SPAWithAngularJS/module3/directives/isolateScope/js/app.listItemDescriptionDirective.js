// app.listItemDescriptionDirective.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .directive("listItemDescription", ListItemDescription);

  function ListItemDescription() {
    let ddo = {
      template: "{{ item.quantity }} of {{ item.name }}",
      restrict: "E"
    };

    return ddo;
  }
})();
