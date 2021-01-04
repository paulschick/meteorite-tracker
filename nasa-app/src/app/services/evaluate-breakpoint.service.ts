import { Injectable } from '@angular/core';
import { Subject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluateBreakpointService {
  screenSize:Subject<any> = new ReplaySubject();

  setSize(breakpoint:any): Observable<any> {
    this.screenSize.next(breakpoint);
    return this.screenSize;
  }
}
