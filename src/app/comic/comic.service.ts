import { Injectable, Inject,Input, OnInit } from '@angular/core';

import { Http } from '@angular/http';
//import { Headers, RequestOptions } from '@angular/http';

// Import RxJs methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ComicService {   
	constructor(@Inject(Http) public http: Http) {  }
    @Input() stateParams;
    cache = null;
    array = [];

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
                .map(resp =>  resp.json());
    }
    getComicRandom() {
      	let number = Math.floor(Math.random()*1815);
      	console.log("this nr new random" + number);
        this.array.push(number);
        
        return this.http.get('http://xkcd.com/' +number +'/info.0.json')
            .map(resp =>  resp.json()).toPromise();
    }


}
