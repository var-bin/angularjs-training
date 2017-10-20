// app.message1.controller.js

"use strict";

import { myApp } from "../app.module";

class Message1Ctrl {
  public name: string = "Vitalii";

  public sum(a: number, b: number): number {
    return a + b;
  }
}

myApp
  .controller("Message1Controller", Message1Ctrl);
