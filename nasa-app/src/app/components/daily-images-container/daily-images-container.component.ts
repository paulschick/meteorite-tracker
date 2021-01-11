import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';

// Dynamic Breakpoint Stuff
import { EvaluateBreakpointService } from '../../services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../services/material-breakpoints.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

// This file will be moved!!!
import { RandImgService } from '../random-img-container/rand-img.service';

@Component({
  selector: 'app-daily-images-container',
  templateUrl: './daily-images-container.component.html',
  styleUrls: ['./daily-images-container.component.scss']
})
export class DailyImagesContainerComponent implements OnInit, OnDestroy {
  AstroPics:IApd[];

  // cols:number = 1;
  cols:number;
  breakpointSub:Subscription;


  constructor(private route: ActivatedRoute,
              private evaluateBreakpoint: EvaluateBreakpointService,
              private matService: MaterialBreakpointsService,
              private randomImageService: RandImgService) { }

  ngOnInit(): void {
    let resolvedAstroPics: IApd[] | NasaError = this.route.snapshot.data[
      'resolvedAstronomyPics'
    ];

    if (resolvedAstroPics instanceof NasaError) {
      console.log(
        `Astronomy Pics List component error: ${resolvedAstroPics.additionalMessage}`
      );
    } else {
      this.AstroPics = resolvedAstroPics;
      console.log('Successfully retrieved Astronomy Images from Nasa API');
    }

    // Breakpoint Evaluator
    this.breakpointSub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.cols = this.matService.breakpointGrid[size];
        console.log(`Columns: ${this.cols}`)
      });
  }

  ngOnDestroy() {
    this.breakpointSub.unsubscribe;
  }

}
