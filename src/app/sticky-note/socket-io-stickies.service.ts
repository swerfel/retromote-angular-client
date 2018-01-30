import { Injectable } from '@angular/core';

import { StickiesService } from './stickies.service';
import { SocketIOConnectionService } from '../socket-io-synchronization/socket-io-connection.service';
import { IdGenerator } from '../util/id-generator';
import { StickyNote } from './sticky-note';
import { NewStickyAddedMessage } from '../socket-io-synchronization/new-sticky-added-message';
import { TextChangedMessage } from '../socket-io-synchronization/text-changed-message';
import { MovedMessage } from '../socket-io-synchronization/moved-message';
import { DraggedMessage } from '../socket-io-synchronization/dragged-message';
import { PositionChange } from '../transformation/position-change';

let NEW_STICKY_EVENT = 'stickyNewAdded';
let STICKY_TEXT_CHANGED = 'stickyTextChanged';
let STICKY_MOVED = 'stickyMoved';
let STICKY_TO_FRONT = 'stickyToFront';
let STICKY_DRAGGED = 'stickyDragged';

@Injectable()
export class SocketIOStickiesService extends StickiesService {
  stickies: Array<StickyNote> = [];

  constructor(private connection: SocketIOConnectionService) {
    super();
    console.log(connection);
    connection.on(NEW_STICKY_EVENT).subscribe((newSticky: NewStickyAddedMessage) => this.onRemoteStickyAdded(newSticky));
    connection.on(STICKY_TEXT_CHANGED).subscribe((textChange: TextChangedMessage) => this.onRemoteTextChange(textChange));
    connection.on(STICKY_MOVED).subscribe((move: MovedMessage) => this.onRemoteMoved(move));
    connection.on(STICKY_TO_FRONT).subscribe((stickyId: string) => this.onRemoteToFront(stickyId));
    connection.on(STICKY_DRAGGED).subscribe((drag: DraggedMessage) => this.onRemoteDragged(drag));
  }

  getStickies(): StickyNote[] {
    return this.stickies;
  }

  newSticky(){
    console.log('creating new sticky');
    let i = this.stickies.length;
    let sticky = this.createNewSticky(i);
    this.stickies.push(sticky);
    this.connection.send(NEW_STICKY_EVENT, new NewStickyAddedMessage(sticky.id, sticky.text, sticky.bounds));
  }

  private onRemoteStickyAdded(s: NewStickyAddedMessage){
    let sticky = this.createSticky(s.id, s.text, s.bounds);
    this.stickies.push(sticky);
  }

  protected onLocalTextChange(s: StickyNote){
    this.connection.send(STICKY_TEXT_CHANGED, new TextChangedMessage(s.id, s.text));
  }

  private onRemoteTextChange(textChange: TextChangedMessage){
    let localSticky = this.findStickyById(textChange.id);
    if (localSticky)
      localSticky.setTextWithoutEvent(textChange.text);
    else
      this.onInconsistentState();
  }

  protected onLocalMoved(s: StickyNote) {
    this.connection.send(STICKY_MOVED, new MovedMessage(s.id, s.bounds.x, s.bounds.y));
  }

  private onRemoteMoved(move: MovedMessage){
    let localSticky = this.findStickyById(move.id);
    if (localSticky)
      localSticky.silentMoveTo(move.x, move.y);
    else
      this.onInconsistentState();
  }

  protected onLocalToFront(sticky: StickyNote) {
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

  protected onLocalDragged(s: StickyNote) {
    this.connection.send(STICKY_DRAGGED, new DraggedMessage(s.id, s.temporaryLocationOffset.dx, s.temporaryLocationOffset.dy));
  }

  private onRemoteDragged(drag: DraggedMessage){
    let localSticky = this.findStickyById(drag.id);
    if (localSticky)
      localSticky.temporaryLocationOffset = new PositionChange(drag.dx, drag.dy);
    else
      this.onInconsistentState();
  }

  private findStickyById(id: string) {
    return this.stickies.find(sticky => sticky.id === id);
  }

  private onInconsistentState(){
    // TODO request stickies from other participants (but who has the newest state?);
    console.error('inconsisten state for stickies!');
  }

  private moveToArrayEnd(sticky: StickyNote) {
    let index = this.stickies.indexOf(sticky);
    if (index !== this.stickies.length-1) {
      if (index > -1) {
        this.stickies.splice(index, 1);
      }
      this.stickies.push(sticky);
    }
  }

}
