// oddEven.spec.js

"use strict";

describe("oddEven", () => {
  let randomNumGenerator8;
  let randomNumGenerator3;
  const getRandomOddEven1to10 = require("../src/oddEven");

  beforeEach(() => {
    randomNumGenerator8 = (from, to) => {
      return 8;
    };

    randomNumGenerator3 = (from, to) => {
      return 3;
    };
  });

  it("Should produce an odd number", () => {
    const result = getRandomOddEven1to10("odd", randomNumGenerator3);

    expect(result).toEqual(3);
  });

  xit("Should produce an even number", () => {
    const result = getRandomOddEven1to10("even", randomNumGenerator8);

    expect(result).toEqual(8);
  });
});
