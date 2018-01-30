import { Bounds } from '../bounds/bounds';

export class NewStickyAddedMessage {
  constructor(public id: string, public text: string, public bounds: Bounds) {}
}
