import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClickHandlerService {

  // Experimental Methods
  getClick(clickNumber:number):void {
    console.log(`Received Click: ${clickNumber}`);
  }





  dummyResponse:any[] = [
    {a:1, b:2, c:3, d:4, e:5},
    {aa:11, bb:22, cc:33, dd:44, ee:55},
    {aaa:111, bbb:222, ccc:333, ddd:444, eee:555}
  ]
}
