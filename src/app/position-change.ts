export class PositionChange {
  constructor(public dx: number, public dy: number) {}

  toTranslateString(): string{
    return 'translate(' + this.dx + ',' + this.dy + ')';
  }
}
