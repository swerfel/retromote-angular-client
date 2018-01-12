import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Bounds } from '../bounds/bounds'
import { EditableElement } from '../editable-element';

let DEFAULT_SIZE = 32;

@Component({
  selector: '[app-confirm-button]',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.css']
})
export class ConfirmButtonComponent implements OnInit {
  @Input() editable: EditableElement;
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

  @HostListener('click')
  onClick() {
    this.editable.confirmEdit();
  }

  min(a: number, b: number): number {
    return a < b ? a : b;
  }

}
