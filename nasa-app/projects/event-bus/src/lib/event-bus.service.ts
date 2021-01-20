import { Injectable } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject = new Subject<any>();

  constructor() { }

  /*
    ^ Component in application subscribes to this event, receives screen size initially, on resize, and any other event
  */
  on(event: Events, action: any): Subscription {
    return this.subject
      .pipe(
        filter((e: EmitEvent) => {
          return e.name === event;
        }),
        map((event: EmitEvent) => {
          return event.value;
        })
      )
        .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject.next(event);
  }

}

export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}

/*
* Could allow for app-level event emittance to update the state of non-connected components
* Could replace child components by emitting filter and sorting events to the container component, rather than as an @Output property from a child
*/
export enum Events {
  ScreenLoaded,
  ScreenResize,
  FilterMass,
  FilterYear,
  SortMass,
  SortName,
  SortYear,
}

/*
^         About Event Bus
*   Allows for communication between non-related components
*   One raises an event, another subscribes to that event
*   May contain subscription for multiple events, and filter for the events that a component is asking for
*/
