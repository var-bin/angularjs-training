"use strict";

class DndListController {
  public models: any = {
    selected: null,
    lists: {
      "A": [],
      "B": []
    }
  };

  constructor() {
    // Generate initial model
    for (var i = 1; i <= 3; ++i) {
      this.models.lists.A.push({
        label: "Item A" + i
      });
      this.models.lists.B.push({
        label: "Item B" + i
      });
    }
  }
}

class DndListComponent implements ng.IComponentOptions {
  public template: string = require("./index.dndList.view.html");
  public controller: any = DndListController;
}

export { DndListComponent };
