import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { EvaluateBreakpointService } from '../../services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../services/material-breakpoints.service';
import { IApd } from '../../models/apd.model';
import { ActivatedRoute } from '@angular/router';
import { NasaError } from 'src/app/models/nasaErrors.model';


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

  // from http
  randImg:IApd;
  randImgUrl:string;

  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService,
    private route: ActivatedRoute
  ) {}

  postImage(imageObservable: Observable<any>) {
    imageObservable.subscribe((data) => this.astronomyImgArr.push(data));
  }


  // Get this from resolver service
  getRandomImage() {

  }

  ngOnInit() {

    let resolvedRandomImage: IApd | NasaError = this.route.snapshot.data['resolvedRandomImage'];

    if (resolvedRandomImage instanceof NasaError) {
      console.log(`Random Image Component error: ${resolvedRandomImage.additionalMessage}`);
    } else {
      this.randImg = resolvedRandomImage[0];
      this.randImgUrl = this.randImg.url;
    }


    this.sub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.cols = this.matService.breakpointGrid[size];
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}
