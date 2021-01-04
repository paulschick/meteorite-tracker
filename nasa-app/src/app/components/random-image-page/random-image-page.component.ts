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

  // Random Images
  // --------------------
  private randomImageArray: IApd[] = [];
  private randomImageArrayClone: IApd[];


  // ----------------

  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService,
    private route: ActivatedRoute
  ) {}

  postImage(imageObservable: Observable<any>) {

  }

  ngOnInit() {

    // with multiple images in the &count
    // ---------------


    // This code will return an array of 50 image objects
    let resolvedRandomImage: IApd | NasaError = this.route.snapshot.data['resolvedRandomImage'];

    if (resolvedRandomImage instanceof NasaError) {
      console.log(`Random Image Component Error: ${resolvedRandomImage.additionalMessage}]`);
    } else {
      // this line pushes the response object onto the empty array
      this.randomImageArray.push(resolvedRandomImage);
      // this line creates a clone of that array to keep the original immutable
      this.randomImageArrayClone = this.randomImageArray.map((x) => x);
      // console.log(this.randomImageArrayClone);

      // Next Steps:
      // The first time the button is pressed, the 0 index object image url should be displayed
      // each successive press after that will display the next object in the array
      // when the end of the array is reached, the user will be prompted to reload the page to continue displaying images

      // use Array.shift() on the array, or on the copy of the array.
      // or property:number = 0, then property+1

    }





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
  }
}
