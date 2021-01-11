// import { Injectable } from '@angular/core';
// import { IApd } from '../models/apd.model';
// import { Observable, Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClickHandlerService {

//   public responseObject:IApd[];
//   public responseSubject:Subject<any> = new Subject()

//   receiveResponseObject(response:IApd[]):void {
//     this.responseObject = response;
//   }

//   getClick(clickNumber:number):Observable<any> {
//     if (clickNumber >= this.responseObject.length) {
//       console.log('End of Array');
//       return;
//     } else {
//       const withResponseObj = this.responseObject[clickNumber];
//       console.log(withResponseObj);
//       this.responseSubject.next(withResponseObj);
//       return this.responseSubject;
//     }
//   }
// }
