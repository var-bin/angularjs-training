// jest.config.js

"use strict";

const config = {
  verbose: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "js",
    "json"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/coverage/"
  ],
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/coverage/"
  ]
};

module.exports = config;
