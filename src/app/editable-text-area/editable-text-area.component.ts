import { Component, Input } from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { EditableElement } from '../editable-element'

@Component({
  selector: '[app-editable-text-area]',
  templateUrl: './editable-text-area.component.html',
  styleUrls: ['./editable-text-area.component.css']
})
export class EditableTextAreaComponent implements EditableElement {
  @Input() areaText: string = '';
  @Input() editing: boolean = false;
  @Input() bounds: Bounds;
  editText: string = ''

  startEditing(){
    this.editText = this.areaText;
    this.editing = true
  }

  discardEdit(){
    this.editing = false;
  }

  confirmEdit(){
    this.areaText = this.editText;
    this.editing = false;
  }

  isEditing(): boolean {
    return this.editing;
  }
}
