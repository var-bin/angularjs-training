// oddEven.js

"use strict";

// Return random odd or even number
function getRandomOddEven1to10(type, randonNumGenerator) {
  let found = false;

  while (!found) {
    let num = randonNumGenerator(1, 10);

    if (type === "odd") {
      if (num % 2 !== 0) {
        return num;
      }
    } else {
      if (num % 2 === 0) {
        return num;
      }
    }
  }


}

module.exports = getRandomOddEven1to10;
