// app.repositories.component.ts

"use strict";

import { RepositoriesService } from "./app.repositories.service";

class RepositoriesCtrl {
  public title: string = "My Repositories";
  public repositories: object[];

  static $inject = ["RepositoriesService"];

  constructor(public RepositoriesService: RepositoriesService) {}

  $onInit() {
    this.RepositoriesService.getRepositories()
      .then((response: Array<object>) => {
        this.repositories = response;
      });
  }

  $doCheck(repositoriesLength) {
    if (this.repositories) {
      repositoriesLength = this.repositories.length;

      console.log("$doCheck: ", repositoriesLength);
    } else {
      console.log("...");
    }
  }
}

class RepositoriesComponent implements ng.IComponentOptions {
  public template: string = require("./app.repositories.view.html");
  public controller: any = RepositoriesCtrl;
}

export { RepositoriesComponent };
