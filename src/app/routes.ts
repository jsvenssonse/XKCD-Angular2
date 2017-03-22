import {NgModule, Component} from '@angular/core';
import {UIRouterModule} from "ui-router-ng2";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {UIRouter} from "ui-router-ng2";
//import {StateTree} from "ui-router-visualizer";
import {Injector, Injectable} from "@angular/core";
import {ComicComponent} from './comic.component';
import { ComicService } from '../services/comic.service';

@Component({  
  template: '<h3>Hello world!</h3>' 
})
export class Hello { }

@Component({ 
  template: '<h3>Its the UI-Router hello world app!</h3>' 
})

export class About { }

/** States */
export const oneState = { name: 'one', url: '/one',  component: ComicComponent }; 

export const secState = { name: 'sec', url: '/sec',  component: ComicComponent };



/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  //const peopleService = injector.get(PeopleService);
  
  // Plunker embeds can time out.  
  // Pre-load the people list at startup.

  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: '/' });
  
  // Use ui-router-visualizer to show the states as a tree
  //StateTree.create(router, document.getElementById('statetree'), { width: 200, height: 100 });
}