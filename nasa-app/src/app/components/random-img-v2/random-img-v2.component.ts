import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NASA_API_KEY } from '../../configs/nasa-config';
import { IApd } from '../../models/apd.model';
import { RandImgService } from './rand-img.service';

@Component({
  selector: 'app-random-img-v2',
  templateUrl: './random-img-v2.component.html',
  styleUrls: ['./random-img-v2.component.scss'],
})
export class RandomImgV2Component implements OnInit, OnDestroy {

  key:string = NASA_API_KEY;
  getUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1`;

  sub: Subscription;
  randomImageArray: IApd[] = [];


  constructor(private service:RandImgService) {}

  onClick() {
    const e:string = 'clicked';
    this.service.receiveClick(e, this.getUrl);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }



}

