import { Component } from "@angular/core";
import { RacePart } from "../../models/race-part.model";
import { RacingDataService } from "../../services/racing-data.service";

@Component({
  selector: "my-app-custom-component",
  templateUrl: "./app/components/app-custom/app.custom.component.html",
  styleUrls: [ "./app/components/app-custom/app.custom.component.css" ]
})

export class AppCustomComponent {
  title = "Ultra Racing Schedule";
  races: RacePart[];
  cash = 10000;

  constructor(private racingDataService: RacingDataService) {}

  getDate(currentDate: Date) {
    return currentDate;
  };

  ngOnInit() {
    this.racingDataService.getRacingData()
      .subscribe(RacePart => this.races = RacePart);
  };

  totalCost() {
    let sum = 0;
    if (Array.isArray(this.races)) {
      for (let race of this.races) {
        if (race.isRacing) {
          sum += race.entryFee;
        }
      }
    }

    return sum;
  };

  cashLeft() {
    return this.cash - this.totalCost();
  };

  upQuantity(race: { inStock: number, quantity: number }): number | boolean {
    if (race.inStock > race.quantity) {
      return race.quantity++;
    }

    return false;
  };

  downQuantity(race: { quantity: number }): number | boolean {
    if (race.quantity > 0) {
      return race.quantity--;
    }

    return false;
  };

  cancelRace(race: { isRacing: boolean }): boolean {
    return race.isRacing = false;
  };

  enterRace(race: { isRacing: boolean, entryFee: number }): boolean {
    if (this.cashLeft() > race.entryFee) {
      return race.isRacing = true;
    }

    alert("You don't have enough cash");
  };

  checkValue(race: { inStock: number, quantity: number }, value: number): number | boolean {
    if (value > race.inStock || value < 0) {
      alert("Wrong value");

      return race.quantity = 0;
    }


  };
};
