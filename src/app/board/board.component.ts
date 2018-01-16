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
  stickies: Array<StickyNote> = [ // use dedicated service
    new StickyNote('1', 'First note',  new Bounds(50, 5, 150, 100)),
    new StickyNote('2', 'Second note',  new Bounds(210, 5, 150, 100))
 ];

 buttonBoundsByIndex(index: number): Bounds{
   let padding = 5;
   let size = 32;
   let x = padding;
   let y = padding + index * (size + padding);
   return new Bounds(x, y, size, size);
 }

 newSticky(){
   console.log('create new sticky');
   let i = this.stickies.length;
   let id = ''+i; // use unique id
   let text = 'Enter your text here ('+i+')';
   let bounds = new Bounds(50+i*15, 110+i*20, 150, 100)
   this.stickies.push(new StickyNote(id, text, bounds));
 }
}
