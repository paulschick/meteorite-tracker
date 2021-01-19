/*
TODO: Send endpoint to utils endpoint file > api key in component is depracated
*/
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NASA_API_KEY } from '../../configs/nasa-config';
import { IApd } from '../../models/apd.model';;
import { DataService } from '../../services/data.service';

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

  constructor(private dataService:DataService) {}

  onClick() {
    this.sub = this.dataService.getRequest(this.getUrl, true).subscribe(
      (data:IApd) => this.data = data
    );
  }

  ngOnInit() {
  }
}
