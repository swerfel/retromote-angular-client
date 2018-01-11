import { Component, Input } from '@angular/core';
import { BoardElement } from '../board-element';
import { EditableElement } from '../editable-element'

@Component({
  selector: '[app-editable-text-area]',
  templateUrl: './editable-text-area.component.html',
  styleUrls: ['./editable-text-area.component.css']
})
export class EditableTextAreaComponent extends BoardElement implements EditableElement {
  @Input() areaText: string = '';
  @Input() editing: boolean = false;
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
