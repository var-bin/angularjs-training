// app.message1.controller.js

"use strict";

class Message1Ctrl {
  public name: string = "Vitalii";

  public sum(a: number, b: number): number {
    return a + b;
  }
}

angular.module("myApp")
  .controller("Message1Controller", Message1Ctrl);
