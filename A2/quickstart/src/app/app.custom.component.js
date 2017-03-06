"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppCustomComponent = (function () {
    function AppCustomComponent() {
        this.title = "Ultra Racing Schedule";
        this.races = [{
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
    }
    AppCustomComponent.prototype.getDate = function (currentDate) {
        return currentDate;
    };
    AppCustomComponent = __decorate([
        core_1.Component({
            selector: "my-app-custom-component",
            template: "<h2>{{title}}</h2>\n    <ul>\n      <li *ngFor=\"let race of races\" class=\"item\">\n        <h4 class=\"race-title\">\n          {{race.name}}\n          <time class=\"race-time\">\n            {{getDate(race.date) | date: \"MMM d, y, h:mm a\"}}\n          </time>\n        </h4>\n        <p class=\"race-description\">\n          {{race.about}}\n          <em *ngIf=\"race.entryFee\">\n            {{race.entryFee | currency: \"EUR\":true}}\n          </em>\n        </p>\n      </li >\n    </ul>",
            styles: ["\n    .race-title {\n      color: #444;\n      font-size: x-large;\n    },\n    .race-time {\n      color: #333;\n      font-weight: bold;\n    },\n    .race-description {\n      font-size: 2em;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppCustomComponent);
    return AppCustomComponent;
}());
exports.AppCustomComponent = AppCustomComponent;
;
//# sourceMappingURL=app.custom.component.js.map