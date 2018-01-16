import { Bounds } from '../bounds/bounds';
import { PositionChange } from '../transformation/position-change';
import { Draggable } from '../draggable/draggable';

export class StickyNote implements Draggable {
  constructor(public id: string, public text: string, public bounds: Bounds, private onMove: Function) {}

  public moveBy(change: PositionChange) {
    this.bounds = this.bounds.movedBy(change);
  }

  onDragStart(){
    this.onMove(this);
  }
  onDragLocationChange(){
    this.onMove(this);
  }
  onDragFinish(){

  }
}
