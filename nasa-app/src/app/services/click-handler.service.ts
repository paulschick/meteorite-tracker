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

  getClick(clickNumber:number):void {
    if (clickNumber >= this.responseObject.length) {
      return console.log('end of array');
    } else {
      const withResponseObj = this.responseObject[clickNumber];
      console.log(withResponseObj);
    }
  }
}
