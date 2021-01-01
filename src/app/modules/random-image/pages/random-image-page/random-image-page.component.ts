import { Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { IApd } from '../../../../shared/models/apd.model';

@Component({
  selector: 'mt-random-image-page',
  templateUrl: './random-image-page.component.html',
  styleUrls: ['./random-image-page.component.scss']
})
export class RandomImagePageComponent implements OnDestroy {

  astronomyImgArr:IApd[] = [];

  constructor() {}

  postImage(imageObservable:Observable<any>) {
    imageObservable.subscribe(
      data => this.astronomyImgArr.push(data)
    )
  }


  ngOnDestroy() {

  }

}


