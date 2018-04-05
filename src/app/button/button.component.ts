import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Bounds } from '../bounds/bounds'

let DEFAULT_SIZE = 24;

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() bounds: Bounds;
  @Input() iconId: string;
  borderVisible: boolean = false;

  ngOnInit() {
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
