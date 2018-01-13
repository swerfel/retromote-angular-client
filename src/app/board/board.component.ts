import { Component } from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { Dimension } from '../dimension';
import { Observable } from 'rxjs/Observable';
import { StickyNote } from '../sticky-note/sticky-note';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  size: Dimension = {
    width: 1000,
    height: 600
  };
  stickies: Array<StickyNote> = [
    new StickyNote('1', 'First note',  new Bounds(10, 5, 150, 100)),
    new StickyNote('2', 'Second note',  new Bounds(170, 5, 150, 100))
 ];
}
