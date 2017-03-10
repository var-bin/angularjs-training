import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from '../../components/app/app.component';
import { AppCustomComponent } from '../../components/app-custom/app.custom.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppCustomComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
