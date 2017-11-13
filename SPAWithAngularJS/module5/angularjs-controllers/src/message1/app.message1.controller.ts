// app.message1.controller.js

"use strict";

class Message1Ctrl {
  public name: string = "Vitalii";

  public sum(a: number, b: number): number {
    return a + b;
  }
}

class Message1Component implements ng.IComponentOptions {
  public template: any;
  public controller: any = Message1Ctrl;
  public bindings: {
    myData: "<"
  }

  constructor() {
    this.getTemplate()
      .then((_t) => {
        this.template = _t;
      });
  }

  getTemplate() {
    return new Promise((resolve, reject) => {
      require.ensure(["./app.message1.view.html"], () => {
        const _t = require("./app.message1.view.html");

        if (_t) {
          resolve(_t)
        } else {
          reject(new Error("Network Error"));
        }
      });
    });
  }
}

export { Message1Component };
