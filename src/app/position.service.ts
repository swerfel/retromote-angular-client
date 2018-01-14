import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { PositionChange } from './position-change';
import { PositionChangeMessage } from './position-change-message'
import { IdGenerator } from './id-generator';
import * as io from 'socket.io-client';

@Injectable()
export class PositionService {

  private url = 'http://localhost:3000';
  private clientId = IdGenerator.uuidv4();
  private socket;

  positionChanged(positionChange: PositionChange){
    this.socket.emit('positionChange', new PositionChangeMessage(this.clientId, 'elementIdNotYetImplemented', positionChange));
  }

  positionChanges() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('positionChanged', (message: PositionChangeMessage) => {
        if (this.isNotOwnMessage(message)){
          observer.next(message.change);
        }
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  isNotOwnMessage(message: PositionChangeMessage){
    return this.clientId !== message.clientId;
  }
}
