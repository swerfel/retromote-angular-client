import { Component, Input, OnInit } from '@angular/core';
import { Bounds } from '../bounds/bounds';

@Component({
  selector: '[app-sticky-note]',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent {
  text: string = "Some very long sticky note text, that hopefully requires some line breaks";
  @Input() bounds: Bounds;
}
