import { Injectable, Inject,Input, OnInit } from '@angular/core';

import { Http, Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

// Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';


import {UIRouterModule} from 'ui-router-ng2';

@Injectable()
export class ComicService implements OnInit {   
	constructor(@Inject(Http) public http: Http) {  }
    @Input() stateParams;
    cache = null;
    array = [];

    ngOnInit(){
        
    }

    getComic() {
        let length  = this.array.length - 2;
        let id = this.array[length];
        
        console.log(length);
        
        if(length >= 0) {
            return this.http.get('http://xkcd.com/' + id +'/info.0.json')
                .map(resp =>  resp.json()).toPromise();
        }else{
            return this.http.get('http://xkcd.com/info.0.json')
                .map(resp =>  resp.json()).toPromise();
        }
    }
    getComicTest() {
            return this.http.get('http://xkcd.com/info.0.json')
                .map(data =>  data.json());
    }
    getComicRandom() {
      	let number = Math.floor(Math.random()*1815);
      	console.log("this nr new random" + number);
        this.array.push(number);
        
        return this.http.get('http://xkcd.com/' +number +'/info.0.json')
            .map(resp =>  resp.json()).toPromise();
    }


}
