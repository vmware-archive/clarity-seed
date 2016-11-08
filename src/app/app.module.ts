import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from 'clarity-angular';

import { ROUTING } from "./app.routing";

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule,
    ROUTING
  ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
