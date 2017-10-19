// app.message.controller.spec.js

"use strict";

describe("MessageController", () => {
  beforeEach(module("myApp"));

  let $controller;
  let messageController;

  beforeEach(inject((_$controller_) => {
    $controller = _$controller_;
    messageController = $controller("MessageController");
  }));

  it("MessageController.name should be equal Vitalii", () => {
    const result = messageController.name;

    expect(result).toBe("Vitalii");
  })
});
