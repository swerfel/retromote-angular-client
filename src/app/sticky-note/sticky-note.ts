import { Bounds } from '../bounds/bounds';

export class StickyNote {
  constructor(public id: string, public text: string, public bounds: Bounds) {}
}
