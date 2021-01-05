import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { EvaluateBreakpointService } from '../../services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../services/material-breakpoints.service';
import { IApd } from '../../models/apd.model';

// ClickHandlerService Imports
import { ClickHandlerService } from '../../services/click-handler.service';


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

  // random image properties
  // -------------------
  private randomImageArray: IApd[] = [];
  private randomImageArrayClone: IApd[];
  // --------------------

  // ClickHandlerService
  // --------------------
  clickSub: Subscription;




  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService,
    private clickHandlerService: ClickHandlerService
  ) {}

  // Function for posting the image
  // --------------------------------

  // postImage(imageObservable: Observable<any>) {

  // }

  // --------------------------------

  ngOnInit() {

    // New Code Here
    // -------------------------

    // Subscription to Subject in ClickHandlerService
    this.clickSub = this.clickHandlerService.responseSubject
      .pipe(distinctUntilChanged())
      .subscribe((image) => {
        this.randomImageArray.push(image);
        console.log(this.randomImageArray);
      });








    // ------------------------

    // with multiple images in the &count
    // ---------------

    // this line creates a clone of that array to keep the original immutable
    //
    //        this.randomImageArray.push(resolvedRandomImage);
    //         this.randomImageArrayClone = this.randomImageArray.map((x) => x);

    // -----------------


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

    // random images observable
    // -------------------
    this.clickSub.unsubscribe;
    // -------------------
  }
}
