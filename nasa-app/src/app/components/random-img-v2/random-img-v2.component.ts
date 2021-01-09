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
  randomImageArray: IApd[];


  constructor(private service:RandImgService) {}

  onClick() {
    this.sub = this.service.getImg(this.getUrl);
    this.randomImageArray = this.service.images;
    console.log(this.randomImageArray)
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }



}

// HOW TO GET THIS TO WORK

// I think I might need to use a child component.
// Basically, all of this data transfer should happen in this component.
// I need to have the child component, or the random image thumbnail component, receive each image as an @Input property.
// that input will then be appended to the child's array, which will be used to output the data.
// the problem here is that since this isn't happening in ngOnInit(), the *ngFor directive is immediately trying to render the images.
// to get around this, I'll send the images down to the child through an Input, and it will register the event, and be able to display the images as they arrive.

