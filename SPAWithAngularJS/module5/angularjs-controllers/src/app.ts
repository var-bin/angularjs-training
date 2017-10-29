// app.ts

"use strict";

import { bootstrap } from "angular";

import "./app.module";
import "./message1/app.message1.controller";
import "./sum/sum";

import "../css/styles.css";

bootstrap(document, ["myApp"], {
  strictDi: true
});
