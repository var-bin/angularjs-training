import { Component } from "@angular/core";
import { RacePart } from "./race-part.model";
import { RACE_PARTS } from "./mocks";

@Component({
  selector: "my-app-custom-component",
  templateUrl: "app/app.custom.component.html",
  styleUrls: [ "app/app.custom.component.css" ]
})

export class AppCustomComponent {
  title = "Ultra Racing Schedule";
  races: RacePart[];

  getDate(currentDate: Date) {
    return currentDate;
  }

  ngOnInit() {
    this.races = RACE_PARTS;
  }
};
