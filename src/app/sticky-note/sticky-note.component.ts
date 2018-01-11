import { Component, OnInit } from '@angular/core';
import { Dimension } from '../dimension';
import { Position } from '../position';

@Component({
  selector: '[sticky-note]',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent implements OnInit {
  text: string = "Sticky note text";
  size: Dimension = {
    width: 150,
    height: 100
  };
  location: Position = {
    x: 10,
    y: 5
  }

  constructor() { }

  ngOnInit() {
  }

}
