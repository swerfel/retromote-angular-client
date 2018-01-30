import { Injectable } from '@angular/core';

import { Bounds } from '../bounds/bounds';
import { IdGenerator } from '../util/id-generator';
import { StickyNote } from './sticky-note';

@Injectable()
export abstract class StickiesService {

  abstract getStickies(): StickyNote[];

  abstract newSticky();

  protected abstract onLocalTextChange(s: StickyNote);

  protected abstract onLocalMoved(s: StickyNote);

  protected abstract onLocalToFront(sticky: StickyNote);

  protected abstract onLocalDragged(s: StickyNote);

  protected createNewSticky(index: number): StickyNote {
    let id = IdGenerator.uuidv4();
    let text = 'Enter your text here ('+index+')';
    let bounds = new Bounds(50+index*15, 110+index*20, 150, 100)
    return this.createSticky(id, text, bounds);
  }

  protected createSticky(id: string, text: string, bounds: Bounds): StickyNote {
    let s = new StickyNote(id, text, bounds);
    s.onMovedToFront.subscribe((s:StickyNote) => this.onLocalToFront(s));
    s.onDragged.subscribe((s:StickyNote) => this.onLocalDragged(s));
    s.onMoved.subscribe((s:StickyNote) => this.onLocalMoved(s));
    s.onTextChanged.subscribe((s:StickyNote) => this.onLocalTextChange(s));
    return s;
  }
}
