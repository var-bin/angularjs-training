// app.repositories.module.ts

"use strict";

import * as angular from "angular";
import { RepositoriesComponent } from "./app.repositories.component";
import { RepositoriesService } from "./app.repositories.service";

angular.module("myApp.repositories", [])
  .component("repositoriesComponent", new RepositoriesComponent())
  .service("RepositoriesService", RepositoriesService);
