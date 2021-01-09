import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-random-img-v2-child',
  templateUrl: './random-img-v2-child.component.html',
  styleUrls: ['./random-img-v2-child.component.scss']
})
export class RandomImgV2ChildComponent implements OnInit, OnChanges {

  @Input() imageResponse:any;

  imageArray:any[];

  constructor() {
    this.imageArray = [];
   }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.imageArray.push(this.imageResponse);
  }

}
