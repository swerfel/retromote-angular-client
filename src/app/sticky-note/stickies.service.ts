import { Injectable } from '@angular/core';

import { Bounds } from '../bounds/bounds';
import { IdGenerator } from '../util/id-generator';
import { StickyNote } from './sticky-note';

@Injectable()
export class StickiesService {
  stickies: Array<StickyNote> = [];

  newSticky(){
    console.log('creating new sticky');
    let i = this.stickies.length;
    let id = IdGenerator.uuidv4();
    let text = 'Enter your text here ('+i+')';
    let bounds = new Bounds(50+i*15, 110+i*20, 150, 100)
    let sticky = new StickyNote(id, text, bounds, (s) => { this.onMove(s) });
    this.stickies.push(sticky);
  }

  onMove(sticky: StickyNote) {
    // ensure the sticky is paint last by
    this.moveToArrayEnd(sticky);
  }

  moveToArrayEnd(sticky: StickyNote) {
    let index = this.stickies.indexOf(sticky);
    if (index > -1) {
      this.stickies.splice(index, 1);
    }
    this.stickies.push(sticky);
  }

}
