# Detecting Screen Size and Resize

[Source 01](https://www.itsolutionstuff.com/post/how-to-get-width-and-height-of-screen-in-angularexample.html)  

## First Solution

- `ngOnInit()` -> `window.innerWidth` and `window.innerHeight`  

```ts
export class Example {

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
```

## Second Solution -> Detect on Resize

- `@HostListener` -> listen for `window:resize` and `$event`
- Create method `onResize` that takes in the event from the `@HostListener`

```ts
export class Example {

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }
}
```

Okay, so these both will return a value that I can compare to breakpoints.
So there's the first part of the functionality.
Getting the breakpoints and comparing them isn't the hard part.
Will this always watch, and will it notify a method of the change and re-evaluate?  

## Trying it Out

I tried out the second solution.
This actually works perfectly.
You resize the screen, and when it settles, it outputs the new screen size (when there's a console.log)  

Wild, so I just need to take these values, and evaluate them/compoare the the breakpoints that I want to use.  

Okay, so I'm getting somewhere.
The following is by no means the solution, but it actually works:

```ts
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

  // test
  cols:number = 3;

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
    this.cols = this.screenWidth/250
  }
}
```

```html
<mat-grid-list [cols]="cols">
  <mat-grid-tile *ngFor="let x of astronomyImgArr">
    <img src="{{x.url}}" alt="{{x.copyright}}" />
  </mat-grid-tile>
</mat-grid-list>
```

- Cols is 3 by default
- Once the window is resized, the width is divided by 250, and that's how many columns there are.  

And actually, this number actually is pretty good, there's two columns on the small screen and so on.  

So I can use this value to compare.
I just need to do the same thing onInIt too.  

Now this will work, but it isn't reusable.
So I would still need to make a directive for it to be reusable, which I can do pretty much the same way I am sure.
