import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitlecardComponent } from './titlecard/titlecard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitlecardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
