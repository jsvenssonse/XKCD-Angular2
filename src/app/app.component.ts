import { Component, Input, OnInit } from '@angular/core';
import { ComicService } from '../services/comic.service';
import { Http,Jsonp, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
	

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
	/*constructor(private comicService: ComicService) {}    
	comicDataImg: any;
	comicDataTitle: any;
	comicDataNr: any;
	arrayofnr: any;

	//This is for geting the latest nr om comics
	GetCurrentComicNr(){
		let urlCurrent = 'http://dynamic.xkcd.com/api-0/jsonp/comic/?callback=JSONP_CALLBACK';
		//console.log(this.number);
		this.comicService.getComic(urlCurrent)
			.subscribe((data) => {
				this.comicDataNr=data.num
				this.show(this.comicDataNr)
			})
		}
	
	//show the comic with ranom nr
	show(nr){
		let number = Math.floor(Math.random()*nr);
		console.log(number);
		//let url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/?callback=JSONP_CALLBACK';
		let url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/' +number +'?callback=JSONP_CALLBACK';
		//console.log(number);
		this.comicService.getComic(url)
			.subscribe((data) => {
				this.comicDataImg = data.img,
				this.comicDataTitle = data.title
			})
		}

	ngOnInit(){
		this.GetCurrentComicNr();
 	}*/
}
