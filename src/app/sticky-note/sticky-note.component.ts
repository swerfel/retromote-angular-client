import { Component, } from '@angular/core';
import { BoardElement } from '../board-element';
import { Dimension } from '../dimension';
import { Position } from '../position';

@Component({
  selector: '[app-sticky-note]',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent extends BoardElement {
  text: string = "Some very long sticky note text, that hopefully requires some line breaks";
}
