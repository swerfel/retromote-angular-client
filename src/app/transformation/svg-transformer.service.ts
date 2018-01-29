import { Injectable, ElementRef, Renderer2, RendererFactory2 } from '@angular/core';
import { PositionChange } from './position-change';

let TRANSLATE_PATTERN = / ?translate\(-?\d+\, ?-?\d+\) ?/;
let SCALE_PATTERN = / ?scale\(\d+\, ?\d+\) ?/;

@Injectable()
export class SvgTransformerService {

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setTranslateTo(el: ElementRef, change: PositionChange) {
    this.setTranslate(el, change.dx, change.dy);
  }

  setTranslate(el: ElementRef, x: number, y: number) {
    let newValue = 'translate(' + x + ', ' + y+')';
    this.setTransform(el, TRANSLATE_PATTERN, newValue);
  }

  clearTranslate(el: ElementRef) {
    this.clearTransform(el, TRANSLATE_PATTERN);
  }

  setScale(el: ElementRef, horizontal: number, vertical: number) {
    let newValue = 'scale(' + horizontal + ', ' + vertical+')';
    this.setTransform(el, SCALE_PATTERN, newValue);
  }

  setTransform(el: ElementRef, valuePattern: RegExp, transformValue: string) {
    let oldValue = el.nativeElement.getAttribute('transform');
    let clearedOldValue = this.removeIn(oldValue, valuePattern);
    let newValue = this.appendTo(clearedOldValue, transformValue);
    this.renderer.setAttribute(el.nativeElement, 'transform', newValue);
  }

  clearTransform(el: ElementRef, valuePattern: RegExp) {
    let oldValue = el.nativeElement.getAttribute('transform');
    let clearedOldValue = this.removeIn(oldValue, valuePattern);
    this.renderer.setAttribute(el.nativeElement, 'transform', clearedOldValue);
  }

  removeIn(inText: string, toRemove: RegExp) {
    if (inText)
      return inText.replace(toRemove, '');
    else
      return ''
  }

  appendTo(appendTo: string, toAppend: string): string {
    if(appendTo)
      return appendTo + ' ' + toAppend;
    else
      return toAppend;
  }
}
