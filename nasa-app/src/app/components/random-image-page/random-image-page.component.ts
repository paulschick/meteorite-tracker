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

  // breakpoint stuff
  // ------------------
  sub: Subscription;
  cols: number;
  // -------------------

  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService,
    private route: ActivatedRoute
  ) {}

  postImage(imageObservable: Observable<any>) {

  }

  ngOnInit() {




    // this is all breakpoint stuff
    // --------------
    this.sub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.cols = this.matService.breakpointGrid[size];
        console.log(`Columns: ${this.cols}`)
      });
    // ----------------

  }

  ngOnDestroy() {

    // breakpoint
    // -------------------
    this.sub.unsubscribe;
    // -------------------
  }
}
