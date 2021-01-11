import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NASA_API_KEY } from '../../configs/nasa-config';
import { IApd } from '../../models/apd.model';
import { RandImgService } from './rand-img.service';

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

  constructor(private service:RandImgService) {}

  onClick() {
    this.sub = this.service.getImg(this.getUrl).subscribe(
      (data:IApd) => this.data = data
    );
  }

  ngOnInit() {
  }

  // ngOnDestroy() {
  //   this.sub.unsubscribe;
  // }



}

/*
HOW TO GET THIS TO WORK

I think I might need to use a child component.
Basically, all of this data transfer should happen in this component.
I need to have the child component, or the random image thumbnail component, receive each image as an @Input property.
that input will then be appended to the child's array, which will be used to output the data.
the problem here is that since this isn't happening in ngOnInit(), the *ngFor directive is immediately trying to render the images.
to get around this, I'll send the images down to the child through an Input, and it will register the event, and be able to display the images as they arrive.

ROUGH WORKING VERSION
Able to return image and display through the use of child component with @Input and ngOnChanges
I am displaying a message that says to try again when the response is not .jpg, I actually like this as it let's the user know what's good
Also it's clear that it's a server problem, and not a problem with the website
whereas when there's just the icon that displays with a bad url, that looks like a design problem, which it is.

INTEGRATION
Now to integrate this, I'll need the style to be set up on the astronomy-pics url at the bottom
I should just use a dummy image to figure this out so I'm not just continually making GET requests
for this to be proper, I need to refactor the get requests so that they're all the same and I can just pass in the url
No reason to have like 4 different get requests that are all doing the same thang.

*/
