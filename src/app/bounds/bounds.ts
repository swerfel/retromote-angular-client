import { PositionChange } from '../position-change';

export class Bounds {
  static EMPTY: Bounds = new Bounds(0, 0, 0, 0);

  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number) {}

  public movedBy(change: PositionChange): Bounds {
    return new Bounds(this.x + change.dx, this.y + change.dy, this.width, this.height);
  }
}
