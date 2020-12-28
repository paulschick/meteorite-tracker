import { Component, OnInit, Input } from '@angular/core';
import { IApd } from 'src/app/shared/models/apd.model';


@Component({
  selector: 'mt-astronomy-pic-detail',
  templateUrl: './astronomy-pic-detail.component.html',
  styleUrls: ['./astronomy-pic-detail.component.scss']
})
export class AstronomyPicDetailComponent implements OnInit {

  @Input() astroDetailImage:IApd;

  constructor() { }

  ngOnInit(): void {

  }

}
