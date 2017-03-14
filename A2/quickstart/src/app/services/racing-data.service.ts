// racing-data.service.ts

import { RACE_PARTS } from "../models/mocks";
import { Injectable } from "@angular/core";

@Injectable()

export class RacingDataService {
  getRacingData() {
    return RACE_PARTS;
  }
}
