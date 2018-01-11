import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Dimension } from '../dimension';
import { Position } from '../position';

@Component({
  selector: '[app-edit-button]',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {
  @Input() bottomLineY: number;
  offset: number = 5;
  scale: number = 0.7;
  size: Dimension = {
    width: 32,
    height: 32
  };
  location: Position = {
    x: this.offset,
    y: this.offset
  }
  borderVisible: boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.location.y =  this.bottomLineY - this.offset - this.size.height * this.scale;
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
    console.log('edit clicked');
  }

}
