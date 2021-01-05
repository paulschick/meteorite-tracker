import { Injectable } from '@angular/core';
import { IApd } from '../models/apd.model';

@Injectable({
  providedIn: 'root'
})
export class ClickHandlerService {

  public responseObject:IApd[];

  receiveResponseObject(response:IApd[]):void {
    this.responseObject = response;
  }

  // Experimental Methods
  getClick(clickNumber:number):void {
    // if (clickNumber >= this.dummyResponse.length) {
    if (clickNumber >= this.responseObject.length) {
      return console.log('end of array');
    } else {
      console.log(`Received Click: ${clickNumber}`);
      const dummyObj = this.dummyResponse[clickNumber];
      const withResponseObj = this.responseObject[clickNumber];
      // console.log(dummyObj.c);
      console.log(withResponseObj);
    }
  }





  dummyResponse:any[] = [
    {a:1, b:2, c:3, d:4, e:5},
    {a:6, b:7, c:8, d:9, e:10},
    {a:11, b:12, c:13, d:14, e:15}
  ]
}
