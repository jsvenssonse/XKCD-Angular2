import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions }  from '@angular/http';

//import { Observable } from 'rxjs/Rx';

import { Http,Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


// Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class ComicService {   
	constructor(private _jsonp: Jsonp) {}


	getComic(url){
		let data: Array<Object>;
		return this._jsonp.get(url)
		.map((data) => data.json())
	}
}
