import { Component, Input, OnChanges } from '@angular/core';
import { IApd } from 'src/app/models/apd.model';

@Component({
  selector: 'app-random-img-v2-child',
  templateUrl: './random-img-v2-child.component.html',
  styleUrls: ['./random-img-v2-child.component.scss']
})
export class RandomImgV2ChildComponent implements OnChanges {
  @Input() _data:IApd;

  _viewData() {
    if (this._data) console.log(this._data)
  }

  ngOnChanges() {
    this._viewData();
  }
}