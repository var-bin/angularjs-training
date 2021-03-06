import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent }  from "../../components/app/app.component";
import { AppCustomComponent } from "../../components/app-custom/app.custom.component";
import { RacingDataService } from "../../services/racing-data.service";

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, AppCustomComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ RacingDataService ]
})

export class AppModule { }
