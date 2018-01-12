export abstract class Bounds {
  static EMPTY: Bounds = {
    x: 0, y: 0, width: 0, height: 0
  }

  x: number;
  y: number;
  width: number;
  height: number;
}
