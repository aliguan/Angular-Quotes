import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyAboutComponentComponent } from './my-about-component/my-about-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    MyHomeComponentComponent,
    MyAboutComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
