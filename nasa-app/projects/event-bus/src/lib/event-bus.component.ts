import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmitEvent, EventBusService, Events } from './event-bus.service';

/*
!NOTE: breakpoint events should live in a directive that can be attached to a template in the using application
*/

@Component({
  selector: 'lib-event-bus',
  template: `
    <p>
      event-bus works!
    </p>
  `,
  styles: [
  ]
})
export class EventBusComponent implements OnInit, OnDestroy {

  // temporary property as example
  public _breakpoint: string;

  constructor(private eventBus: EventBusService) {
    // get breakpoint on screen load
    //! temporary value
    this._breakpoint = 'Large';

    // get breakpoint on screen resize
  }

  ngOnInit(): void {
    this.screenLoaded(this._breakpoint);
  }

  screenLoaded(breakpoint: string): void {
    this.eventBus.emit(new EmitEvent(Events.ScreenLoaded, breakpoint));
  }

  ngOnDestroy(): void {

  }

}
