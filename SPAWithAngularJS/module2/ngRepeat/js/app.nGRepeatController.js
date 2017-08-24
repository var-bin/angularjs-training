// app.nGRepeatController.js

(function() {
  "use strict";

  angular.module("MyApp")
    .controller("NgRepeatController", NgRepeatController);

  function NgRepeatController() {
    let vm = this;

    vm.shoppingList = [
      "Milk",
      "Milk",
      "Donuts",
      "Cookies",
      "Chocolate",
      "Peanut Butter",
      "Pepto Bismol"
    ];

    vm.shoppingList1 = [
      {
        name: "Milk",
        quantity: 2
      },
      {
        name: "Donuts",
        quantity: 200
      },
      {
        name: "Cookies",
        quantity: 300
      },
      {
        name: "Chocolate",
        quantity: 5
      },
      {
        name: "Peanut Butter",
        quantity: 3
      },
      {
        name: "Pepto Bismol",
        quantity: 7
      }
    ];

    vm.addNewItem = addNewItem;

    function addNewItem() {
      let item = {
        name: vm.newItemName,
        quantity: vm.newItemQuantity
      };

      vm.shoppingList1.push(item);

      vm.newItemName = "";
      vm.newItemQuantity = "";
    }
  }
})();
