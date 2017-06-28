import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { MyHomeComponent } from './my-home-component/my-home-component.component';
import { MyAboutComponent } from './my-about-component/my-about-component.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { CountersComponent } from './counters/counters.component';
import { ChuckNorrisPageComponent } from './chuck-norris-page/chuck-norris-page.component';
import { QuoteitemComponent } from './quoteitem/quoteitem.component';

import { CharactersService } from './characters.service';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';

const routes: Routes = [
  { path: 'quotes', component: QuoteListComponent },

  { path: 'home', component: MyHomeComponent },

  { path: 'about', component: MyAboutComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'contacts', component: ContactListComponent },

  { path: 'contact/:id', component: ContactComponent },

  { path: 'counters', component: CountersComponent },

  { path: 'chuck', component: ChuckNorrisPageComponent },

]

@NgModule({
  declarations: [
    AppComponent,
    QuoteListComponent,
    MyHomeComponent,
    MyAboutComponent,
    ContactListComponent,
    ContactComponent,
    CountersComponent,
    ChuckNorrisPageComponent,
    QuoteitemComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
