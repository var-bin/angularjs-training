// racing-data.service.ts

import { Injectable } from "@angular/core";
import { RacePart } from "../models/race-part.model";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";


@Injectable()

export class RacingDataService {
  constructor(private http: Http) {}

  getRacingData() {
    return this.http.get("app/models/racing-data.json")
              .map(response => <RacePart[]>response.json().data);
  }
}
