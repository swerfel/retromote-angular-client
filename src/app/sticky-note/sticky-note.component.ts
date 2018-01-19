import { Component, Input} from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { StickyNote } from './sticky-note';
import { PositionChange } from '../transformation/position-change';

@Component({
  selector: '[app-sticky-note]',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent {
  @Input() sticky: StickyNote;

  buttonBoundsByIndex(index: number){
    let padding = 5;
    let size = 24;
    let x = padding + index * (size + padding);
    let y = this.sticky.bounds.height - size - padding;
    return new Bounds(x, y, size, size);
  }
}
