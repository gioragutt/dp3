import { Injectable } from '@angular/core';
import { Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

type Channels = Map<Type<any>, Subject<any>>;

@Injectable()
export class PubsubService {
  channels: Channels = new Map<Type<any>, Subject<any>>();

  subscribe<T>(type: Type<T>): Observable<T> {
    if (!this.channels.has(type)) {
      this.channels.set(type, new Subject<T>());
    }

    console.log('Subscribing to: ', type.toString());
    return this.channels.get(type).asObservable();
  }

  publish<T>(type: Type<T>, payload: T) {
    this.channels.get(type).next(payload);
  }
}
