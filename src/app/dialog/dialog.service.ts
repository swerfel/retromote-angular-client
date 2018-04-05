import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { DialogSettings } from './dialog-settings'

@Injectable()
export class DialogService {

  settings: Subject<DialogSettings>;

  constructor() {
    this.settings = new BehaviorSubject(new DialogSettings(false, "should not be visible", "should not be visible", null));
  }

  showDialog(title: string, text: string, onSuccess: Function) {
    let nextDialog = new DialogSettings(true, title, text, onSuccess);
    this.settings.next(nextDialog);
  }
}
