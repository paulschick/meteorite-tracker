import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';
import { AstronomyPicsEndpoint } from '../../lib/AstronomyPicsEndpoint';
import { DataService } from '../../services/data.service';

// Dynamic Breakpoint
import { EvaluateBreakpointService } from '../../services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../services/material-breakpoints.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

/*
TRING THE NASAENDPOINTCONSTRUCTOR
need imports from there , using the this.startQueryObj to build the url in class instance
*/

/*
        TODO: Fully implement NasaEndpointConstructor
        todo - implement this constructor in the two other components that use the endpoints
        todo - create a home for the interface
        todo - create an interface for the query objects
        todo - create classes for each query obj, or implement at component-level
                todo - implementing component level could allow for dynamic url construction, especially if attached to an event in the template
                todo - a user could enter a number into a form as well as random images or daily images, and return that number of either on the page.

        KEEP THESE:

        - GetDateRange
        - NasaEndpointConstructor -> all interfaces and exported constants/class in this file

        PHASE OUT:

        - AstronomyPicsEndpoint.ts
*/

import { ExampleCreateQueries, NasaEndpointConstructor } from '../../lib/NasaEndpointConstructor';

@Component({
  selector: 'app-daily-images-container',
  templateUrl: './daily-images-container.component.html',
  styleUrls: ['./daily-images-container.component.scss'],
})
export class DailyImagesContainerComponent
  implements OnInit, OnDestroy {
  public AstroPics: IApd[];
  public cols: number;
  private breakpointSub: Subscription;
  private dataSub: Subscription;
  private astronomyPicsEndpoint:AstronomyPicsEndpoint

  // NasaEndpointConstructor
  private exampleCreateQueries:ExampleCreateQueries;
  private nasaEndpointConstructor:NasaEndpointConstructor;
  private _endpoint:string;

  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService,
    private dataService: DataService
  ) {
    this.astronomyPicsEndpoint = new AstronomyPicsEndpoint(12);

    // NEC
    this.exampleCreateQueries = new ExampleCreateQueries();
    this.nasaEndpointConstructor = new NasaEndpointConstructor(
      'astronomy-pics',
      this.exampleCreateQueries.startQueryObj,
      false,
      true,
      false,
      12,
      null
    );
    // this._endpoint = this.nasaEndpointConstructor.endpoint;
    this._endpoint = this.nasaEndpointConstructor._newEndpoint;
  }

  ngOnInit(): void {
    this.dataSub = this.dataService
      // .getRequest(this.astronomyPicsEndpoint.nasaEndpoint, false)
      .getRequest(this._endpoint, false)
      .subscribe(
        (image: IApd[]) => {
          this.AstroPics = image;
        },
        (err: NasaError) => console.log(err)
      );

    // Breakpoint Evaluator
    this.breakpointSub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.cols = this.matService.breakpointGrid[size];
        console.log(`Columns: ${this.cols}`);
      });
  }

  ngOnDestroy() {
    this.breakpointSub.unsubscribe;
    this.dataSub.unsubscribe;
  }
}
