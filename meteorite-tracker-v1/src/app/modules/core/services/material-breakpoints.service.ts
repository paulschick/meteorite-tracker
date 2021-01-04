import { Injectable } from '@angular/core';
import { ColumnsByBreakpoint } from '../../../shared/models/columns-by-breakpoint.model';

@Injectable({
  providedIn: 'root'
})
export class MaterialBreakpointsService {

  breakpointGrid: ColumnsByBreakpoint = {
    XLarge: 8,
    Large: 6,
    Medium: 4,
    Small: 2,
    XSmall: 1
  };

}
