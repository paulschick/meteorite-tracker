import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { EvaluateBreakpointService } from '../../../core/services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../../core/services/material-breakpoints.service';
import { IApd } from '../../../../shared/models/apd.model';

@Component({
  selector: 'mt-random-image-page',
  templateUrl: './random-image-page.component.html',
  styleUrls: ['./random-image-page.component.scss']
})
export class RandomImagePageComponent implements OnInit, OnDestroy {

  astronomyImgArr:IApd[] = [];
  screenWidth:number;
  screenHeight:number;
  sub:Subscription;
  cols:number;

  constructor(private evaluateBreakpoint: EvaluateBreakpointService, private matService: MaterialBreakpointsService) {}

  postImage(imageObservable:Observable<any>) {
    imageObservable.subscribe(
      data => this.astronomyImgArr.push(data)
    )
  }

  ngOnInit() {
    // this.screenWidth = window.innerWidth;
    // this.screenHeight = window.innerHeight;
    // console.log(this.screenHeight, this.screenWidth)


    this.sub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.cols = this.matService.breakpointGrid[size];
        console.log(this.cols);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

  // @HostListener('window:resize', [])
  // onResize() {
  //   this.screenWidth = window.innerWidth;
  //   this.screenHeight = window.innerHeight;
  //   console.log(this.screenHeight, this.screenWidth)
  //   this.cols = this.screenWidth/250
  // }
}


