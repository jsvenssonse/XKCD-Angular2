import {Component, Input, OnInit} from '@angular/core';
import {UIROUTER_DIRECTIVES} from 'ui-router-ng2';
import { ComicService } from '../services/comic.service';
import {Transition} from "ui-router-ng2";



@Component({  
  template: `
    <p> hellop World</p>
    {{comicId}}
`})
export class Test implements OnInit{
  @Input() comicId;

  constructor(private comicService: ComicService) {} 
    comicDataImg: any;
  comicDataTitle: any;
  comicDataNr: any;


    //show the comic with ranom nr
  showSpec(){
    let id = '100';
    console.log( );
    //let url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/?callback=JSONP_CALLBACK';
    let url = 'http://dynamic.xkcd.com/api-0/jsonp/comic/' +'200' +'?callback=JSONP_CALLBACK';
    //console.log(number);
    this.comicService.getComic(url)
      .subscribe((data) => {
        this.comicDataImg = data.img,
        this.comicDataTitle = data.title
      })
    }
    ngOnInit(){
    
      this.showSpec();

   }
 }