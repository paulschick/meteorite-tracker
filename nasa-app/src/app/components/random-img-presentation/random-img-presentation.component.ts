import { Component, Input, OnChanges } from '@angular/core';
import { IApd } from 'src/app/models/apd.model';

@Component({
  selector: 'app-random-img-presentation',
  templateUrl: './random-img-presentation.component.html',
  styleUrls: ['./random-img-presentation.component.scss']
})
export class RandomImagePresentationComponent {
  @Input() _data:IApd;

  // _viewData() {
  //   if (this._data) console.log(this._data)
  // }

  // ngOnChanges() {
  //   this._viewData();
  // }
}
