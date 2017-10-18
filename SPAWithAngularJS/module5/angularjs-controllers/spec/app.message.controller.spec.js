// app.message.controller.spec.js

"use strick";

describe("MessageController", () => {
  beforeEach(angular.mock.module("myApp"));

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
