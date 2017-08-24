// filter.js

"use strict";

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numberArray: ", numberArray);

function filterFive(value) {
  return value > 5;
}

let filteredNumberArray = numberArray.filter(filterFive);

console.log("filteredNumberArray: ", filteredNumberArray);

let shoppingList = [
  "Milk",
  "Milk",
  "Donuts",
  "Cookies",
  "Chocolate",
  "Peanut Butter",
  "Pepto Bismol",
  "Pepto Bismol (1)",
  "Pepto Bismol (2)"
];

const searchedValue = "Bismol";

function searchedValueList(value) {
  return value.indexOf(searchedValue) !== -1;
}

console.log("shoppingList: ", shoppingList);

let filteredShoppingList = shoppingList.filter(searchedValueList);

console.log("filteredShoppingList: ", filteredShoppingList);
