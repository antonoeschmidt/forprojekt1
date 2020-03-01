import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GalgegameComponent } from './galgegame/galgegame.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GalgegameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
