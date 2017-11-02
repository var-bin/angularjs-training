// app.message1.controller.js

"use strict";

class Message1Ctrl {
  public name: string = "Vitalii";

  public sum(a: number, b: number): number {
    return a + b;
  }
}

class Message1Component implements ng.IComponentOptions {
  public template: string = require("./app.message1.view.html");
  public controller: any = Message1Ctrl;
  public bindings: {
    myData: "<"
  }
}

export { Message1Component };
