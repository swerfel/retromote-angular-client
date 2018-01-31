import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

import { StickiesService } from './stickies.service';
import { StickyNote } from './sticky-note';
import { Bounds } from '../bounds/bounds';
import { PositionChange } from '../transformation/position-change';

export class FirebaseStickyNote {
  key: string;
  text: string;
  temporaryLocationOffset: PositionChange = new PositionChange(0,0);
  bounds: Bounds;
  order: number;
}

@Injectable()
export class FirebaseStickiesService extends StickiesService {
  private basePath: string = '/stickies/fSbA330TtjVZ-QdYAAAA';
  stickies: Array<StickyNote> = [];
  highestOrder = 0;

  items: AngularFireList<FirebaseStickyNote> = null;
  constructor(private db: AngularFireDatabase) {
    super();

    this.items = this.getItemsList();
    this.items.snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
      .subscribe((stickies: FirebaseStickyNote[]) => {
        console.log('new stickies arrived: '+stickies.length);
        this.setStickies(stickies);
        console.log('new: '+this.stickies.length);
      })
  }

  public getStickies(): StickyNote[]{
    return this.stickies;
  }

  private setStickies(firebaseStickies: FirebaseStickyNote[]) {
    let mapped = firebaseStickies.map(s=>this.fromFirebaseToLocal(s));
    let args: any[] = [0, mapped.length];
    Array.prototype.splice.apply(this.stickies, args.concat(mapped));
    this.highestOrder = Math.max(...firebaseStickies.map(s=>s.order));
  }

  private fromFirebaseToLocal(fs: FirebaseStickyNote): StickyNote {
    let bounds = new Bounds(fs.bounds.x, fs.bounds.y, fs.bounds.width, fs.bounds.height);
    let sticky = this.createSticky(fs.key, fs.text, bounds);
    sticky.temporaryLocationOffset.dx = fs.temporaryLocationOffset.dx;
    sticky.temporaryLocationOffset.dy = fs.temporaryLocationOffset.dy;
    return sticky;
  }

  newSticky(){
    console.log('creating new sticky');
    let i = this.stickies.length;
    let sticky = this.createNewSticky(i);
    this.stickies.push(sticky);

    let s = new FirebaseStickyNote();
    s.text = sticky.text;
    s.bounds = sticky.bounds;
    s.order = this.highestOrder++;
    this.createItem(s);
  }

  protected  onLocalTextChange(s: StickyNote){
    this.updateItem(s.id, {text: s.text});
  }

  protected  onLocalMoved(s: StickyNote){
    this.updateItem(s.id,{bounds: s.bounds});
  }

  protected  onLocalToFront(s: StickyNote){
    this.updateItem(s.id,{order: this.highestOrder++});
  }

  protected  onLocalDragged(s: StickyNote){
    this.updateItem(s.id,{temporaryLocationOffset: s.temporaryLocationOffset});
  }

  private getItemsList(): AngularFireList<FirebaseStickyNote> {
    return this.db.list<FirebaseStickyNote>(this.basePath,
            ref => ref.orderByChild('order'));
  }

  createItem(item: FirebaseStickyNote): void  {
    this.items.push(item);
  }
  // Update an existing item
  updateItem(key: string, value: any): void {
   this.items.update(key, value)
     .catch(error => this.handleError(error))
  }
  // Deletes a single item
  deleteItem(key: string): void {
     this.items.remove(key)
       .catch(error => this.handleError(error))
  }
  // Deletes the entire list of items
  deleteAll(): void {
     this.items.remove()
       .catch(error => this.handleError(error))
  }
  // Default error handling for all actions
  private handleError(error) {
   console.log(error)
  }
}
