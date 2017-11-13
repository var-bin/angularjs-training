// app.ts

"use strict";

import { bootstrap } from "angular";
import { myAppModule } from "./app.module";
import { Message1Component } from "./message1/app.message1.controller";
import "./sum/sum";
import { RepositoriesComponent } from "./repositories/app.repositories.component";
import { RepositoriesService } from "./repositories/app.repositories.service";

import "../css/styles.css";

myAppModule
  .component("message1Component", new Message1Component())
  .component("repositoriesComponent", new RepositoriesComponent())
  .service("RepositoriesService", RepositoriesService);

bootstrap(document, ["myApp"], {
  strictDi: true
});
