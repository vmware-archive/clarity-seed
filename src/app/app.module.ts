/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
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
