import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {UIRouterModule} from "ui-router-ng2";

import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ComicService } from '../services/comic.service';
//import { RoutesComponent } from './routes.component';

import { oneState, secState, uiRouterConfigFn } from './routes.component';
import {ComicComponent} from './comic.component';

let INITIAL_STATES =  [ oneState, secState ];
let INITIAL_COMPONENTS =  [ ComicComponent, AppComponent];

@NgModule({
  declarations: [
    INITIAL_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    JsonpModule,
    UIRouterModule.forRoot({
      states: INITIAL_STATES,
      useHash: true,
      config: uiRouterConfigFn
    })
  ],
  providers: [ComicService],
  bootstrap: [AppComponent],
})
export class AppModule { }

