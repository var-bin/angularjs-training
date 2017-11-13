// app.ts

"use strict";

import { bootstrap } from "angular";
import "./app.module";
import "./sum/sum";

import "../css/styles.css";

bootstrap(document, ["myApp"], {
  strictDi: true
});
