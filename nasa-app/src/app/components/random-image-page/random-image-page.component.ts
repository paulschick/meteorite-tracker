import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { EvaluateBreakpointService } from '../../services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../services/material-breakpoints.service';
import { IApd } from '../../models/apd.model';


@Component({
  selector: 'app-random-image-page',
  templateUrl: './random-image-page.component.html',
  styleUrls: ['./random-image-page.component.scss'],
})
export class RandomImagePageComponent implements OnInit, OnDestroy {
  astronomyImgArr: IApd[] = [];
  screenWidth: number;
  screenHeight: number;
  sub: Subscription;
  cols: number;

  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService
  ) {}

  postImage(imageObservable: Observable<any>) {
    imageObservable.subscribe((data) => this.astronomyImgArr.push(data));
  }

  ngOnInit() {
    // this.screenWidth = window.innerWidth;
    // this.screenHeight = window.innerHeight;
    // console.log(this.screenHeight, this.screenWidth)

    this.sub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.cols = this.matService.breakpointGrid[size];
        // console.log(this.cols);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
