import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Bounds } from '../bounds/bounds'

let DEFAULT_SIZE = 32;

@Component({
  selector: '[app-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() bounds: Bounds;
  scale: number = 1;
  borderVisible: boolean = false;

  ngOnInit() {
    let currentSize = this.min(this.bounds.width, this.bounds.height) ;
    this.scale = currentSize / DEFAULT_SIZE;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.borderVisible = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.borderVisible = false;
  }

  min(a: number, b: number): number {
    return a < b ? a : b;
  }
}
