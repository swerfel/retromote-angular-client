import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Bounds } from '../bounds/bounds';
import { Dimension } from '../dimension';
import { StickyNote } from '../sticky-note/sticky-note';
import { StickiesService } from '../sticky-note/stickies.service';
import { FirebaseStickiesService } from '../sticky-note/firebase-stickies.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [
    { provide: StickiesService, useClass: FirebaseStickiesService}
  ]
})
export class BoardComponent  implements OnInit{
  size: Dimension = {
    width: 1000,
    height: 600
  };
  stickies: Array<StickyNote> = [];

  constructor(private stickiesService: StickiesService) {  }

  ngOnInit(){
    this.stickies = this.stickiesService.getStickies();
  }

 buttonBoundsByIndex(index: number): Bounds{
   let padding = 5;
   let size = 16;
   let x = padding;
   let y = padding + index * (size + padding);
   return new Bounds(x, y, size, size);
 }

 newSticky(){
   this.stickiesService.newSticky();
 }
}
