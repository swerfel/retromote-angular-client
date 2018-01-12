import { Component, Input, HostListener } from '@angular/core';
import { EditableElement } from '../editable-element';

@Component({
  selector: '[app-confirm-button]',
  templateUrl: './confirm-button.component.html',
  styleUrls: ['./confirm-button.component.css']
})
export class ConfirmButtonComponent {
  @Input() editable: EditableElement;

  @HostListener('click')
  onClick() {
    this.editable.confirmEdit();
  }
}
