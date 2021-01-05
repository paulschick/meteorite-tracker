import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickHandlerService {

  // Experimental Methods
  getClick(clickNumber:number):void {
    if (clickNumber >= this.dummyResponse.length) {
      return console.log('end of array');
    } else {
      console.log(`Received Click: ${clickNumber}`);
      const dummyObj = this.dummyResponse[clickNumber];
      console.log(dummyObj.c);
    }
  }



  dummyResponse:any[] = [
    {a:1, b:2, c:3, d:4, e:5},
    {a:6, b:7, c:8, d:9, e:10},
    {a:11, b:12, c:13, d:14, e:15}
  ]
}
