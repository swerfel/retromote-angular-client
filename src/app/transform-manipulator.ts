import { ElementRef, Renderer2 } from '@angular/core';

export abstract class TransformManipulator {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  addToTransform(val: string) {
    let oldValue = this.el.nativeElement.getAttribute('transform');
    let newValue = this.appendTo(oldValue, val);
    this.setTransform(newValue);
  }

  setTransform(val: string) {
    this.renderer.setAttribute(this.el.nativeElement, 'transform', val);
  }

  appendTo(appendTo: string, toAppend: string): string {
    if(appendTo)
      return appendTo + ' ' + toAppend;
    else
      return toAppend;
  }
}
