import { Component } from '@angular/core';

@Component({
  selector: "my-app",
  template: `<h1>
    Hello {{name}}
  </h1>
  <my-app-custom-component></my-app-custom-component>
  `
})

export class AppComponent {
  name = "Angular2";
}
