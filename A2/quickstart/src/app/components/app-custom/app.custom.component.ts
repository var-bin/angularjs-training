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
  cash = 10000;

  getDate(currentDate: Date) {
    return currentDate;
  };

  ngOnInit() {
    this.races = RACE_PARTS;
  };

  totalCost() {
    let sum = 0;

    for (let race of this.races) {
      if (race.isRacing) {
        sum += race.entryFee;
      }
    }

    return sum;
  };

  cashLeft() {
    return this.cash - this.totalCost();
  };

  upQuantity(race) {
    if (race.inStock > race.quantity) {
      return race.quantity++;
    }

    return false;
  };

  downQuantity(race) {
    if (race.quantity > 0) {
      return race.quantity--;
    }

    return false;
  };

  cancelRace(race) {
    return race.isRacing = false;
  };

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      return race.isRacing = true;
    }

    alert("You don't have enough cash");
  };
};
