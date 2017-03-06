import { Component } from '@angular/core';

@Component({
  selector: 'my-app-custom-component',
  template: `<h2>{{title}}</h2>
    <ul>
      <li *ngFor="let race of races" class="item">
        <h4>
          {{race.name}}
          <time>
            {{race.date}}
          </time>
        </h4>
        <p>
          {{race.about}}
          <em *ngIf="race.entryFee">
            $ {{race.entryFee}}
          </em>
        </p>
      </li >
    </ul>
  `,
})

export class AppCustomComponent {
  title = "Ultra Racing Schedule";
  races = [{
    "id": 1,
    "name": "Daytona Thunderdome",
    "date": new Date('2512-01-04T14:00:00'),
    "about": "Race through the ruins of an ancient Florida battle arena.",
    "entryFee": 3200
  }, {
    "id": 2,
    "name": "San Francisco Ruins",
    "date": new Date('2512-07-03T20:00:00'),
    "about": "Drift down the streets of a city almost sunk under the ocean.",
    "entryFee": 4700
  }, {
    "id": 3,
    "name": "New York City Skyline",
    "date": new Date('2512-07-12T21:00:00'),
    "about": "Fly between buildings in the electronic sky.",
    "entryFee": 0
  }];
};
