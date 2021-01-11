import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NASA_API_KEY } from '../../configs/nasa-config';
import { IApd } from '../../models/apd.model';
// import { RandImgService } from './rand-img.service';
import { AstroPicsService } from '../../services/astro-pics.service';

@Component({
  selector: 'app-random-img-container',
  templateUrl: './random-img-container.component.html',
  styleUrls: ['./random-img-container.component.scss'],
})
export class RandomImgContainer implements OnInit {

  key:string = NASA_API_KEY;
  getUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1`;

  sub: Subscription;
  data:IApd;

  // constructor(private service:RandImgService) {}
  constructor(private service:AstroPicsService) {}

  onClick() {
    this.sub = this.service.getRandomImg(this.getUrl).subscribe(
      (data:IApd) => this.data = data
    );
  }

  ngOnInit() {
  }
}