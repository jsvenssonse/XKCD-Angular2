import {Component, Input, OnInit} from '@angular/core';
import { ComicService } from './comic.service';


/*@Component({  
  template: `
    <md-toolbar color="primary">
      <div class="right"><img src="assets/chevron-left.png" alt="" /></div>
      <div class="center"><h3>{{ comic.title }}</h3></div>
      <div class="left"><img src="assets/dots-vertical.png" alt="" /></div>
        </md-toolbar>
        <md-card>
            <md-grid-list cols="1">
                <img md-media-md src="{{comic.img}}" />
            </md-grid-list>
        </md-card> 
`})*/

@Component({  
  selector: 'comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})

export class ComicComponent{ 
  @Input() comic;

}