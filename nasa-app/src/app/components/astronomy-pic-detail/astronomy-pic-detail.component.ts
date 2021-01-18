import { Component, Input, OnInit } from '@angular/core';
import { IApd } from '../../models/apd.model';


@Component({
  selector: 'app-astronomy-pic-detail',
  templateUrl: './astronomy-pic-detail.component.html',
  styleUrls: ['./astronomy-pic-detail.component.scss']
})
export class AstronomyPicDetailComponent implements OnInit {

  @Input() astroDetailImage:IApd;
  @Input() currentRoute:string;
  routedFromRandom:boolean;

  ngOnInit() {
    this.routedFromRandom = (this.currentRoute.includes('random-image') ? true : false);
  }
}
