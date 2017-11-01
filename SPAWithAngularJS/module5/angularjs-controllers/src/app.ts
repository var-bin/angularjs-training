// app.ts

"use strict";

import { bootstrap } from "angular";
import { myApp } from "./app.module";
import { Message1Component } from "./message1/app.message1.controller";
import "./sum/sum";

import "../css/styles.css";

myApp
  .component("message1Component", new Message1Component());

bootstrap(document, ["myApp"], {
  strictDi: true
});
