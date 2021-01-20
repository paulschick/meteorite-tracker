import { Directive } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
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

  sendSize(result:BreakpointState) {

    const matchingQuery: string = Object.keys(result.breakpoints).find(key => result.breakpoints[key] === true);

    const breakpoint: string = Object.keys(Breakpoints).find(key => Breakpoints[key] === matchingQuery);

    this.evaluateBreakpoint.setSize(breakpoint);
  }

}
