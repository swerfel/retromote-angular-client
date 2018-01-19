export class PositionChange {
  constructor(public dx: number, public dy: number) {}

  reset(){
    this.dx = 0;
    this.dy = 0;
  }
}
