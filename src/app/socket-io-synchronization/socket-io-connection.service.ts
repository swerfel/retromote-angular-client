import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import * as io from 'socket.io-client';
import { IdGenerator } from '../util/id-generator';

@Injectable()
export class SocketIOConnectionService {
  private url = 'https://powerful-dusk-74006.herokuapp.com/';
  private clientId = IdGenerator.uuidv4();
  private socket;

  constructor() {
    this.socket = io(this.url);

    this.socket.on('connect', () => {
      console.log('connected to server with socket id: ' + this.socket.id);
    });
    this.socket.on('disconnect', () => {
      console.log('disconnected from server');
    });
  }

  public send(eventName: string, message: any) {
    this.socket.emit(eventName, message);
  }

  public on<T>(eventName: string): Observable<T> {
    let observable = new Observable<T>(observer => {
      this.socket.on(eventName, (message: T) => {
        observer.next(message);
      });
    })
    return observable;
  }

}
