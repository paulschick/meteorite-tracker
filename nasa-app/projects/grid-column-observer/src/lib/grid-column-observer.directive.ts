import { Directive } from '@angular/core';
// TODO: Add @angular/cdk/layout to peer dependencies
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { GridColumnObserverService } from './grid-column-observer.service';

@Directive({
  selector: '[libGridColumnObserver]'
})
export class GridColumnObserverDirective {

  //^ add breakpoints service to injected dependencies in constructor
  constructor(breakpointObserver: BreakpointObserver,
              private gridColumnObserverService: GridColumnObserverService) {

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

    this.gridColumnObserverService.setSize(breakpoint);
  }

}
