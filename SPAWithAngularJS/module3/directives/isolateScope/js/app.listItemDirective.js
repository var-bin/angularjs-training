// app.listItemDirective.js

(function() {
  "use strict";

  angular.module("ShoppingListDirectiveApp")
    .directive("listItem", ListItem);

  function ListItem() {
    const templateUrl = "../templates/list-item-description.html";

    let ddo = {
      templateUrl,
      restrict: "E"
    };

    return ddo;
  }
})();
