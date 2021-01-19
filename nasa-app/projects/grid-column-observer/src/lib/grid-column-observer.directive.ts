import { Directive } from '@angular/core';
// TODO: Add @angular/cdk/layout to peer dependencies
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//* import { Service } -> evaluate breakpoints service;

@Directive({
  selector: '[libGridColumnObserver]'
})
export class GridColumnObserverDirective {

  //^ add breakpoints service to injected dependencies in constructor
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ])
    .subscribe((result) => {
      if (result.matches) {
        //? From service method: { or equivalent method }
        //* this.sendSize(result);
        console.log(result)
      }
    });
  }

  sendSize(result:any) {

    const matchingQuery = Object.keys(result.breakpoints).find(key => result.breakpoints[key] === true);

    const breakpoint = Object.keys(Breakpoints).find(key => Breakpoints[key] === matchingQuery);

    //? From service method
    //* this.evaluateBreakpoint.setSize(breakpoint);
  }

}

/*

import { Directive } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EvaluateBreakpointService } from '../services/evaluate-breakpoint.service';

@Directive({
  selector: '[mtObserveBreakpoints]'
})
export class ObserveBreakpointsDirective {

  constructor(breakpointObserver: BreakpointObserver, private evaluateBreakpoint: EvaluateBreakpointService) {

    breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,
      Breakpoints.XSmall
    ])
    .subscribe((result) => {
      if (result.matches) {
        this.sendSize(result);
        console.log(result)
      }
    });
  }

  sendSize(result:any) {

    const matchingQuery = Object.keys(result.breakpoints).find(key => result.breakpoints[key] === true);

    const breakpoint = Object.keys(Breakpoints).find(key => Breakpoints[key] === matchingQuery);

    this.evaluateBreakpoint.setSize(breakpoint);
  }

}




*/
