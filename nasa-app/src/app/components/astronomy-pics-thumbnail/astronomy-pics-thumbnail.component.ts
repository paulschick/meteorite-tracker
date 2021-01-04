import { Component, Input } from '@angular/core';
import { IApd } from '../../models/apd.model';

@Component({
  selector: 'app-astronomy-pics-thumbnail',
  templateUrl: './astronomy-pics-thumbnail.component.html',
  styleUrls: ['./astronomy-pics-thumbnail.component.scss']
})
export class AstronomyPicsThumbnailComponent {
  @Input() astronomyPic:IApd;
}
