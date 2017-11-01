// app.ts

"use strict";

import { bootstrap } from "angular";
import { myAppModule } from "./app.module";
import { Message1Component } from "./message1/app.message1.controller";
import "./sum/sum";

import "../css/styles.css";

myAppModule
  .component("message1Component", new Message1Component());

bootstrap(document, ["myApp"], {
  strictDi: true
});
