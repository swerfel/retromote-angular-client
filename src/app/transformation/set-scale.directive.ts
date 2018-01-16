import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { SvgTransformerService } from './svg-transformer.service';

@Directive({
  selector: '[appSetScale]'
})
export class SetScaleDirective{
  constructor(private el: ElementRef, private transformer: SvgTransformerService) {}

  @Input() set appSetScale(scale: number) {
    this.transformer.setScale(this.el, scale, scale);
  }
}
