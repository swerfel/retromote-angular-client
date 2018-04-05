import { Component, OnInit } from '@angular/core';

import { DialogService } from './dialog.service'
import { DialogSettings } from './dialog-settings'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  settings: DialogSettings;

  constructor(dialogService: DialogService) {
    dialogService.settings.subscribe(s => this.settings = s);
  }

  onConfirm(){
    this.settings.active = false;
    this.settings.onConfirm();
  }

  onDismiss(){
    this.settings.active = false;
  }

}
