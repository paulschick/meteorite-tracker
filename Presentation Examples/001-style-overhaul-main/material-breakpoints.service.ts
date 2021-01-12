import { Injectable } from '@angular/core';
import { ColumnsByBreakpoint } from '../models/columns-by-breakpoint.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialBreakpointsService {

  // This can be included in another service
  // No need to have one object in here, can even just have a class file instead of a service.

  breakpointGrid: ColumnsByBreakpoint = {
    XLarge: 8,
    Large: 6,
    Medium: 4,
    Small: 2,
    XSmall: 1
  };

}
