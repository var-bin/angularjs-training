// app.ts

"use strict";

import { bootstrap } from "angular";

import "./app.module";
import "./message/app.message.controller";
import "./message1/app.message1.controller";
import "./sum/sum";


bootstrap(document, ["myApp"], {
  strictDi: true
});
