import { Injectable } from '@angular/core';
//TODO: Add rxjs to peer dependencies
import { Subject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GridColumnObserverService {

  //TODO: Create interface for this Subject<T>
  screenSize:Subject<any> = new ReplaySubject();

  //TODO: Create interface for breakpoint:any, Observable<any>
  setSize(breakpoint:any): Observable<any>{
    this.screenSize.next(breakpoint);
    return this.screenSize;
  }
}
