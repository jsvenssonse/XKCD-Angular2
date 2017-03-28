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
import {Transition} from "ui-router-ng2";


export class RoutesComponent { 
	stateone = {
		name: 'comic',
		url: '/comic/:id',
		component: ComicComponent,
		resolve: [
		  	{ 
			    token: 'comic',
			    deps: [Transition, ComicService], 
			    resolveFn: (trans, comicSvc) => comicSvc.getComic()
		  	}
		],
	}
	statetwo = {

		name: 'random',
		url: '/random/:id',
		component: ComicComponent,
		resolve: [
		  	{ 
			    token: 'comic',
			    deps: [ComicService], 
			    resolveFn: (comicSvc) => comicSvc.getComicRandom()
		  	}
		],
	}
	uiRouterConfigFn(router: UIRouter, injector: Injector) {

  		let comicService = injector.get(ComicService);

 	 	router.urlService.rules.otherwise({ state: '/' });

	}
}