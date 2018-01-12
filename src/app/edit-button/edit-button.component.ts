import { Component, Input, HostListener } from '@angular/core';
import { EditableElement } from '../editable-element';

@Component({
  selector: '[app-edit-button]',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  @Input() editable: EditableElement;

}
