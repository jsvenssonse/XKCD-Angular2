import {Component, Input, OnInit} from '@angular/core';
import { ComicService } from './comic.service';


@Component({  
  selector: 'comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})

export class ComicComponent implements OnInit { 
    @Input() comic;
    comic2 : any;
    constructor(private comicService: ComicService) {}

    ngOnInit(){
        this.getComic()
       
    }

    getComic(){
        this.showspinner();
       return this.comicService.getComicTest()
            .subscribe((resp) => {
                console.log('API working') 
                this.hidespinner();
            })
    }

    showspinner(){
        document.getElementById("spinner").className = "show";
        document.getElementById("img").className = "hide";
        
    }

    hidespinner(){
        document.getElementById("spinner").className = "hide";
        document.getElementById("img").className = "show";
    }



}