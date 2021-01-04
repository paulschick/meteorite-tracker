import { Component, Input } from '@angular/core';
import { IApd } from '../../models/apd.model';


@Component({
  selector: 'app-astronomy-pic-detail',
  templateUrl: './astronomy-pic-detail.component.html',
  styleUrls: ['./astronomy-pic-detail.component.scss']
})
export class AstronomyPicDetailComponent {

  @Input() astroDetailImage:IApd;

}
