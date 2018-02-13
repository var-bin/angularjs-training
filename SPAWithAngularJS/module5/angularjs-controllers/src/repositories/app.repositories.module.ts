// app.repositories.module.ts

"use strict";

import * as angular from "angular";
import { RepositoriesComponent } from "./app.repositories.component";
import { RepositoriesService } from "./app.repositories.service";

const myApp_Repositories = angular.module("myApp.repositories", [])
  .component("repositoriesComponent", new RepositoriesComponent())
  .service("RepositoriesService", RepositoriesService);

export { myApp_Repositories };
