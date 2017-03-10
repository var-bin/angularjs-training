import { Component } from "@angular/core";
import { RacePart } from "../../models/race-part.model";
import { RACE_PARTS } from "../../models/mocks";

@Component({
  selector: "my-app-custom-component",
  templateUrl: "./app/components/app-custom/app.custom.component.html",
  styleUrls: [ "./app/components/app-custom/app.custom.component.css" ]
})

export class AppCustomComponent {
  title = "Ultra Racing Schedule";
  races: RacePart[];

  getDate(currentDate: Date) {
    return currentDate;
  };

  ngOnInit() {
    this.races = RACE_PARTS;
  };
};
