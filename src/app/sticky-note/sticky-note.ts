import { Bounds } from '../bounds/bounds';
import { PositionChange } from '../position-change';

export class StickyNote {
  constructor(public id: string, public text: string, public bounds: Bounds) {}

  public moveBy(change: PositionChange) {
    this.bounds = this.bounds.movedBy(change);
  }
}
