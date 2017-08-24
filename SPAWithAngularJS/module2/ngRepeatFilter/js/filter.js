// filter.js

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("numberArray: ", numberArray);

function filterFive(value) {
  return value > 5;
}

let filteredNumberArray = numberArray.filter(filterFive);

console.log("filteredNumberArray: ", filteredNumberArray);
