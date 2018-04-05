import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Draggable } from './draggable';
import { PositionChange } from '../transformation/position-change';

let MINIMAL_DISTANCE_TO_BE_A_DRAG = 8;

@Component({
  selector: '[app-draggable]',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent {
  isDrag = false;
  isMouseDown = false;
  startX: number;
  startY: number;
  connection;
  @Input('drag-enabled') dragEnabled: boolean;
  @Input('draggabe-element') draggableElement: Draggable;
  @Input() translate: PositionChange;

  constructor(private el: ElementRef) {}


  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent){
    this.isMouseDown = true;
    if (this.dragEnabled) {
        this.preventDefaultDragAndDrop(event);
        this.startX = event.screenX;
        this.startY = event.screenY;
    }
  }

  preventDefaultDragAndDrop(event: MouseEvent) {
    if (event.preventDefault)
      event.preventDefault();
    else
      event.returnValue = false;
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent){
    this.isMouseDown = false;
    if (this.isDrag) {
      this.isDrag = false;
      let change = this.computeChangeDimension(event);
      this.draggableElement.onDragFinish(change);
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    if (this.isDrag) {
      let change = this.computeChangeDimension(event);
      // TODO if outside the bounds move back inside the board
      this.draggableElement.onDragLocationChange(change);
    } else if (this.isMouseDown && this.dragEnabled && this.isFarEnoughToBeADrag(event)) {
      this.isDrag = true;
      this.draggableElement.onDragStart();
    }
  }

  isFarEnoughToBeADrag(event: MouseEvent) {
    let dx = event.screenX - this.startX;
    let dy = event.screenY - this.startY;
    let distance = Math.sqrt(dx*dx+dy*dy);
    return distance >= MINIMAL_DISTANCE_TO_BE_A_DRAG;
  }

  computeChangeDimension(event: MouseEvent): PositionChange {
    return new PositionChange(event.screenX - this.startX, event.screenY - this.startY);
  }

}
