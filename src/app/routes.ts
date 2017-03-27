import {NgModule, Component} from '@angular/core';
import {UIRouterModule} from "ui-router-ng2";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {UIRouter} from "ui-router-ng2";
import {Injector, Injectable} from "@angular/core";

//This files are for JSONP
//import {ComicComponent} from './comic.component';
//import { ComicService } from '../services/comic.service';

import { ComicService } from './comic/comic.service';
import {ComicComponent} from './comic/comic.component';

import { ModuleWithProviders } from '@angular/core';

import {Transition} from "ui-router-ng2";


export const stateone = {
	name: 'comic',
	url: '/comic',
	component: ComicComponent,
	resolve: [
	  	{ 
		    token: 'comic',
		    deps: [ComicService], 
		    resolveFn: (comicSvc) => comicSvc.getComic()
	  	}
	]
};
export const statetwo = {
	name: 'random',
	url: '/random',
	component: ComicComponent,
	resolve: [
	  	{ 
		    token: 'comic',
		    deps: [ComicService], 
		    resolveFn: (comicSvc) => comicSvc.getComicRandom()
	  	}
	]
};

/** UIRouter Config  */
export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  //const peopleService = injector.get(PeopleService);
  const comicService = injector.get(ComicService);
  // Plunker embeds can time out.  
  // Pre-load the people list at startup.

  // If no URL matches, go to the `hello` state by default
  router.urlService.rules.otherwise({ state: '/comic' });

}