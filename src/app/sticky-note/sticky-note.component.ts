import { Component, Input} from '@angular/core';
import { Bounds } from '../bounds/bounds';
import { StickyNote } from './sticky-note';
import { PositionChange } from '../transformation/position-change';
import { DialogService } from '../dialog/dialog.service'

@Component({
  selector: '[app-sticky-note]',
  templateUrl: './sticky-note.component.html',
  styleUrls: ['./sticky-note.component.css']
})
export class StickyNoteComponent{
  @Input() sticky: StickyNote;

  constructor(private dialogService: DialogService) {

  }

  buttonBoundsByIndex(index: number){
    let padding = 5;
    let size = 16;
    let x = padding + index * (size + padding);
    let y = this.sticky.bounds.height - size - padding;
    return new Bounds(x, y, size, size);
  }

  onDelete(){
    let title = "Möchstest du den Aufkleber wirklich löschen?"
    let text = "Der Aufkleber mit dem Text '"+this.sticky.text+"' wird gelöscht. Das kann nicht rückgängig gemacht werden!";
    let onSuccess = () => this.sticky.onDelete();
    this.dialogService.showDialog(title, text, onSuccess);
  }
}
