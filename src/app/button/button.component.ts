import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Bounds } from '../bounds/bounds'

let DEFAULT_SIZE = 16;

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() bounds: Bounds;
  @Input() iconId: string;
  scale: number = 1;
  borderVisible: boolean = false;

  ngOnInit() {
    let currentSize = this.min(this.bounds.width, this.bounds.height) ;
    this.scale = currentSize / DEFAULT_SIZE;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    this.borderVisible = this.noButtonsPressed(event);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.borderVisible = false;
  }

  noButtonsPressed(event: MouseEvent): boolean {
    return event.buttons === 0;
  }

  min(a: number, b: number): number {
    return a < b ? a : b;
  }
}
