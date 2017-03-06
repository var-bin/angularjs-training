import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppCustomComponent }  from './app.custom.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AppCustomComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
