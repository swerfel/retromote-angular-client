import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { EditableElement } from '../editable-element'

@Component({
  selector: '[app-editable-text-area]',
  templateUrl: './editable-text-area.component.html',
  styleUrls: ['./editable-text-area.component.css']
})
export class EditableTextAreaComponent implements EditableElement {
  @Input() areaText: string = '';
  @Output() areaTextChange: EventEmitter<string> = new EventEmitter();
  @Input() editing: boolean = false;
  @Input() bounds: Bounds;

  startEditing(){
    this.editing = true
  }

  discardEdit(){
    this.editing = false;
  }

  confirmEdit(){
    this.areaTextChange.emit(this.areaText);
    this.editing = false;
  }

  isEditing(): boolean {
    return this.editing;
  }
}
