import { Injectable } from '@angular/core';

import { Bounds } from '../bounds/bounds';
import { ConnectionService } from '../synchronization/connection.service';
import { IdGenerator } from '../util/id-generator';
import { StickyNote } from './sticky-note';
import { NewStickyAddedMessage } from './new-sticky-added-message';
import { TextChangedMessage } from '../synchronization/text-changed-message';
import { MovedMessage } from '../synchronization/moved-message';
import { DraggedMessage } from '../synchronization/dragged-message';
import { PositionChange } from '../transformation/position-change';

let NEW_STICKY_EVENT = 'stickyNewAdded';
let STICKY_TEXT_CHANGED = 'stickyTextChanged';
let STICKY_MOVED = 'stickyMoved';
let STICKY_TO_FRONT = 'stickyToFront';
let STICKY_DRAGGED = 'stickyDragged';

@Injectable()
export class StickiesService {
  stickies: Array<StickyNote> = [];

  constructor(private connection: ConnectionService) {
    console.log(connection);
    connection.on(NEW_STICKY_EVENT).subscribe((newSticky: NewStickyAddedMessage) => this.onRemoteStickyAdded(newSticky));
    connection.on(STICKY_TEXT_CHANGED).subscribe((textChange: TextChangedMessage) => this.onRemoteTextChange(textChange));
    connection.on(STICKY_MOVED).subscribe((move: MovedMessage) => this.onRemoteMoved(move));
    connection.on(STICKY_TO_FRONT).subscribe((stickyId: string) => this.onRemoteToFront(stickyId));
    connection.on(STICKY_DRAGGED).subscribe((drag: DraggedMessage) => this.onRemoteDragged(drag));
  }

  newSticky(){
    console.log('creating new sticky');
    let i = this.stickies.length;
    let id = IdGenerator.uuidv4();
    let text = 'Enter your text here ('+i+')';
    let bounds = new Bounds(50+i*15, 110+i*20, 150, 100)
    let sticky = this.createSticky(id, text, bounds);
    this.stickies.push(sticky);
    this.connection.send(NEW_STICKY_EVENT, new NewStickyAddedMessage(id, text, bounds));
  }

  private onRemoteStickyAdded(s: NewStickyAddedMessage){
    let sticky = this.createSticky(s.id, s.text, s.bounds);
    this.stickies.push(sticky);
  }

  private onLocalTextChange(s: StickyNote){
    this.connection.send(STICKY_TEXT_CHANGED, new TextChangedMessage(s.id, s.text));
  }

  private onRemoteTextChange(textChange: TextChangedMessage){
    let localSticky = this.findStickyById(textChange.id);
    if (localSticky)
      localSticky.setTextWithoutEvent(textChange.text);
    else
      this.onInconsistentState();
  }

  private onLocalMoved(s: StickyNote) {
    this.connection.send(STICKY_MOVED, new MovedMessage(s.id, s.bounds.x, s.bounds.y));
  }

  private onRemoteMoved(move: MovedMessage){
    let localSticky = this.findStickyById(move.id);
    if (localSticky)
      localSticky.silentMoveTo(move.x, move.y);
    else
      this.onInconsistentState();
  }

  private onLocalToFront(sticky: StickyNote) {
    this.moveToArrayEnd(sticky);
    this.connection.send(STICKY_TO_FRONT, sticky.id);
  }

  private onRemoteToFront(stickyId: string){
    let localSticky = this.findStickyById(stickyId);
    if (localSticky)
      this.moveToArrayEnd(localSticky);
    else
      this.onInconsistentState();
  }

  private onLocalDragged(s: StickyNote) {
    this.connection.send(STICKY_DRAGGED, new DraggedMessage(s.id, s.temporaryLocationOffset.dx, s.temporaryLocationOffset.dy));
  }

  private onRemoteDragged(drag: DraggedMessage){
    let localSticky = this.findStickyById(drag.id);
    if (localSticky)
      localSticky.temporaryLocationOffset = new PositionChange(drag.dx, drag.dy);
    else
      this.onInconsistentState();
  }

  private createSticky(id: string, text: string, bounds: Bounds): StickyNote {
    let s = new StickyNote(id, text, bounds);
    s.onMovedToFront.subscribe((s:StickyNote) => this.onLocalToFront(s));
    s.onDragged.subscribe((s:StickyNote) => this.onLocalDragged(s));
    s.onMoved.subscribe((s:StickyNote) => this.onLocalMoved(s));
    s.onTextChanged.subscribe((s:StickyNote) => this.onLocalTextChange(s));
    return s;
  }

  private findStickyById(id: string) {
    return this.stickies.find(sticky => sticky.id === id);
  }

  private onInconsistentState(){
    // TODO request stickies from other participants (but who has the newest state?);
    console.error('inconsisten state for stickies!');
  }

  moveToArrayEnd(sticky: StickyNote) {
    let index = this.stickies.indexOf(sticky);
    if (index !== this.stickies.length-1) {
      if (index > -1) {
        this.stickies.splice(index, 1);
      }
      this.stickies.push(sticky);
    }
  }

}
