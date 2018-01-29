import { Component } from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { Dimension } from '../dimension';
import { Observable } from 'rxjs/Observable';
import { StickyNote } from '../sticky-note/sticky-note';
import { StickiesService } from '../sticky-note/stickies.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [ StickiesService ]
})
export class BoardComponent {
  size: Dimension = {
    width: 1000,
    height: 600
  };
  stickies: Array<StickyNote>;

  constructor(private stickiesService: StickiesService) {
    this.stickies = stickiesService.stickies;
  }

 buttonBoundsByIndex(index: number): Bounds{
   let padding = 5;
   let size = 32;
   let x = padding;
   let y = padding + index * (size + padding);
   return new Bounds(x, y, size, size);
 }

 newSticky(){
   this.stickiesService.newSticky();
 }
}
