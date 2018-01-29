import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Draggable } from './draggable';
import { PositionChange } from '../transformation/position-change';


@Component({
  selector: '[app-draggable]',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent {
  isDrag = false;
  startX: number;
  startY: number;
  connection;
  @Input('drag-enabled') dragEnabled: boolean;
  @Input('draggabe-element') draggableElement: Draggable;
  @Input() translate: PositionChange;

  constructor(private el: ElementRef) {}


  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent){
    if (this.dragEnabled) {
      this.preventDefaultDragAndDrop(event);
      this.isDrag = true;
      this.startX = event.screenX;
      this.startY = event.screenY;
      this.draggableElement.onDragStart();
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
    }
  }

  computeChangeDimension(event: MouseEvent): PositionChange {
    return new PositionChange(event.screenX - this.startX, event.screenY - this.startY);
  }

}
