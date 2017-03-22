import {Component, Input, OnInit} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import { ComicService } from '../services/comic.service';

@Component({  
  template: `
    <md-toolbar color="primary">
            <h1>{{comicDataTitle}}</h1>
        </md-toolbar>
        <md-card>
            <md-grid-list cols="1">
                <img md-media-md src="{{comicDataImg}}" />
            </md-grid-list>
            <a uiSref="one" [uiParams]="{ comicId: comicNum }" uiSrefActive="active">Knapp1</a>
            <a uiSref="sec" class="{{comicNum}}" uiSrefActive="active">Knapp2</a>
        </md-card>
`})
export class ComicComponent implements OnInit{ 
  constructor(private comicService: ComicService) {}    
  comicDataImg: any;
  comicDataTitle: any;
  comicDataNr: any;
  arrayofnr: any;
  comicNum: any;
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
        this.comicDataTitle = data.title,
        this.comicNum = data.num
      })
    }

  ngOnInit(){
    this.GetCurrentComicNr();
   }
}