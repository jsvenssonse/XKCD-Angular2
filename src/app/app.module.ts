import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {UIRouterModule} from "ui-router-ng2";


import {JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';

//This files are for JSONP
//import { ComicService } from '../services/comic.service';
//import {ComicComponent} from './comic.component';

import { RoutesComponent } from './routes';

import { ComicService } from './comic/comic.service';
import { ComicComponent } from './comic/comic.component';

let comp = new RoutesComponent;
let INITIAL_STATES =  [ comp.stateone, comp.statetwo ];
let INITIAL_COMPONENTS =  [ ComicComponent, AppComponent];

@NgModule({
  declarations: [
    INITIAL_COMPONENTS
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
      config: comp.uiRouterConfigFn
    })
  ],
  providers: [ComicService],
  bootstrap: [AppComponent]
})
export class AppModule { }

