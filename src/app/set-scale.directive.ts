import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { TransformManipulator } from './transform-manipulator';

@Directive({
  selector: '[appSetScale]'
})
export class SetScaleDirective extends TransformManipulator{
  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  @Input() set appSetScale(scale: number) {
    super.addToTransform('scale(' + scale + ',' + scale + ')');
  }

}
