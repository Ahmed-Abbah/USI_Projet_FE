import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuestionCardComponent } from './question-card/question-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
