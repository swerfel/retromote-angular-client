import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { TransformManipulator } from '../transform-manipulator';

@Component({
  selector: '[app-draggable]',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableComponent extends TransformManipulator {

  isDrag: boolean = false;
  startX: number;
  startY: number

  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent){
    this.isDrag = true;
    this.startX = event.screenX;
    this.startY = event.screenY;
    console.log('start: '+this.startX+', '+this.startY);
    // TODO avoid movement if in edit mode
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(event: MouseEvent){
    this.isDrag = false;
    // TODO: Check whether release was over the element, to make a drop or to cancel the drag
    super.setTransform('');
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    if (this.isDrag) {
      let dx = event.screenX - this.startX;
      let dy = event.screenY - this.startY;
      // TODO if outside the bounds move back inside the board
      super.setTransform('translate(' + dx + ',' + dy + ')');
    }
  }

}
