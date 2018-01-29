import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { SvgTransformerService } from './svg-transformer.service';

@Directive({
  selector: '[appTranslateToBoundsLocation]'
})
export class TranslateToBoundsLocationDirective{
  constructor(private el: ElementRef, private transformer: SvgTransformerService) {}

  @Input() set appTranslateToBoundsLocation(bounds: Bounds) {
    this.transformer.setTranslate(this.el, bounds.x, bounds.y); 
  }

}
