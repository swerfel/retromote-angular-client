import { Bounds } from '../bounds/bounds';
import { PositionChange } from '../transformation/position-change';
import { Draggable } from '../draggable/draggable';
import { Subject } from 'rxjs/Subject';

export class StickyNote implements Draggable {
  private _text: string;
  temporaryLocationOffset: PositionChange = new PositionChange(0,0);

  onMovedToFront = new Subject();
  onDragged = new Subject();
  onMoved = new Subject();
  onDeleted = new Subject();

  onTextChanged = new Subject();

  constructor(public id: string, text: string, public bounds: Bounds) {
    this._text = text;
  }

  get text():string {
    return this._text;
  }

  set text(newText:string) {
    this._text = newText;
    this.onTextChanged.next(this);
  }

  setTextWithoutEvent(newText: string) {
    this._text = newText;
  }

  onDragStart(){
    this.onMovedToFront.next(this);
  }

  onSelect(){
    this.onMovedToFront.next(this);
  }

  onDragLocationChange(change: PositionChange){
    this.temporaryLocationOffset = change;
    this.onDragged.next(this);
  }

  onDragFinish(change: PositionChange){
    this.bounds = this.bounds.movedBy(change);
    this.temporaryLocationOffset.reset();
    this.onMoved.next(this);
  }

  onDelete(){
    this.onDeleted.next(this);
  }

  silentMoveTo(x: number, y: number) {
    this.bounds = new Bounds(x, y, this.bounds.width, this.bounds.height);
    this.temporaryLocationOffset.reset();
  }
}
