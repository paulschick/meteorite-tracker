import { Component, Input, OnInit } from '@angular/core';
import { IApd } from '../../../../shared/models/apd.model';

@Component({
  selector: 'mt-astronomy-pics-thumbnail',
  templateUrl: './astronomy-pics-thumbnail.component.html',
  styleUrls: ['./astronomy-pics-thumbnail.component.scss']
})
export class AstronomyPicsThumbnailComponent implements OnInit {

  @Input() astronomyPic:IApd;

  constructor() { }

  ngOnInit(): void {
  }

}
