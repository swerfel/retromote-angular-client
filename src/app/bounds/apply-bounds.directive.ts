import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Bounds } from './bounds';

@Directive({
  selector: '[appApplyBounds]'
})
export class ApplyBoundsDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() set appApplyBounds(bounds: Bounds) {
    this.setAttr('x', String(bounds.x));
    this.setAttr('y', String(bounds.y));
    this.setAttr('width', String(bounds.width));
    this.setAttr('height', String(bounds.height));
  }

  setAttr(name: string, val: string) {
    this.renderer.setAttribute(this.el.nativeElement, name, val);
  }

}
