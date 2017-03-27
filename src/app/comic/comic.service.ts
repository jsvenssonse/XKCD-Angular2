import { Injectable, Inject,Input } from '@angular/core';

import { Http, Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

// Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComicService {   
	constructor(@Inject(Http) public http: Http) {  }
  numbers = [];
  cache = null;

@Input() stateParams;
  getComic() {
    return this.cache = this.cache || this.http.get('http://xkcd.com/info.0.json')
        .map(resp =>  resp.json()).toPromise();
        
  }
  getComicBack(number) {
  	 this.numbers.push(number)
  	 console.log("längden " + this.numbers.length);
  	 let counter = (this.numbers.length - 1);
	console.log('nr minus 1 = ' + counter);
	console.log([this.numbers[counter]]);
	return this.http.get('http://xkcd.com/' +this.numbers[counter] +'/info.0.json')
        .map(resp =>  resp.json()).toPromise();
  }
  getComicRandom() {
  	
  	let number = Math.floor(Math.random()*1815);
  	console.log("this nr new random" + number);
  	this.getComicBack(number);
    return this.http.get('http://xkcd.com/' +number +'/info.0.json')
        .map(resp =>  resp.json()).toPromise();
        
  }

}
