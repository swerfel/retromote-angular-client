import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Bounds } from './bounds';
import { TransformManipulator } from '../transform-manipulator';

@Directive({
  selector: '[appTranslateToBoundsLocation]'
})
export class TranslateToBoundsLocationDirective extends TransformManipulator{
  constructor(el: ElementRef, renderer: Renderer2) {
    super(el, renderer);
  }

  @Input() set appTranslateToBoundsLocation(bounds: Bounds) {
    super.setTransform('translate(' + bounds.x + ',' + bounds.y + ')');
  }

}
