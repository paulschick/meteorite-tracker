import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { IApd } from '../../../../shared/models/apd.model';

@Component({
  selector: 'mt-random-image-page',
  templateUrl: './random-image-page.component.html',
  styleUrls: ['./random-image-page.component.scss']
})
export class RandomImagePageComponent implements OnInit {

  astronomyImgArr:IApd[] = [];
  screenWidth:number;
  screenHeight:number;

  constructor() {}

  postImage(imageObservable:Observable<any>) {
    imageObservable.subscribe(
      data => this.astronomyImgArr.push(data)
    )
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    // console.log(this.screenHeight, this.screenWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    console.log(this.screenHeight, this.screenWidth)
  }
}


