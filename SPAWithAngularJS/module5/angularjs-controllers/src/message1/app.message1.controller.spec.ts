// app.message1.controller.spec.ts

"use strict";

describe("Message1Controller", () => {
  beforeEach(angular.mock.module("myApp"));

  let $controller;
  let message1Controller;

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_;
    message1Controller = $controller("Message1Controller");
  }));

  it("Message1Ctrl.name should be equal Vitalii", () => {
    const result = message1Controller.name;

    expect(result).toBe("Vitalii");
  });

  it("Message1Ctrl.sum should add 1 + 2 to equal 3", () => {
    const sum = message1Controller.sum;

    expect(sum(1, 2)).toBe(3);
  })
});
