import {Component, Input, OnInit} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import { ComicService } from '../services/comic.service';

@Component({  
  template: `
          <md-toolbar color="primary">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="#000000" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            <span class="text-center">Random Comic</span>
            <div class="example-sidenav-content">
              
                    <svg style="width:44px;height:44px" viewBox="0 0 24 24">
                        <path fill="#000000" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                    </svg>
               
            </div>
        </md-toolbar>
        <md-card>
            <md-grid-list cols="1">
                <img md-media-md src="{{comicDataImg}}" />
            </md-grid-list>
        </md-card>

        <br> <a uiSref="comic" [uiParams]="{comicId : comicNum}">Knapp2 Bonus</a>
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
  //show the comic with ranom nr
  showSpec(){
    let id = '200';
    console.log(id);
    //let url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/?callback=JSONP_CALLBACK';
    let url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/' +'200' +'?callback=JSONP_CALLBACK';
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