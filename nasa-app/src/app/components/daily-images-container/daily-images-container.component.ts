import { Component, OnInit, OnDestroy } from '@angular/core';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';
import { DataService } from '../../services/data.service';

// Dynamic Breakpoint
import { EvaluateBreakpointService } from '../../services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../services/material-breakpoints.service';
import { distinctUntilChanged } from 'rxjs/operators';
import { Subscription } from 'rxjs';

// With nasa-endpoints.ts
import { ENDPOINT } from '../../utils/nasa-endpoints';

@Component({
  selector: 'app-daily-images-container',
  templateUrl: './daily-images-container.component.html',
  styleUrls: ['./daily-images-container.component.scss'],
})
export class DailyImagesContainerComponent
  implements OnInit, OnDestroy {
  public AstroPics: IApd[];
  public cols: number;
  private breakpointSub: Subscription; private dataSub: Subscription;

  // nasa-endpoints
  private _endpoint:ENDPOINT;
  private DATE_RANGE_ENDPOINT:string;

  constructor(
    private evaluateBreakpoint: EvaluateBreakpointService,
    private matService: MaterialBreakpointsService,
    private dataService: DataService
  ) {
    this._endpoint = new ENDPOINT();
    this.DATE_RANGE_ENDPOINT= this._endpoint.DATE_RANGE;
  }

  ngOnInit(): void {

    this.dataSub = this.dataService
      .getRequest(this.DATE_RANGE_ENDPOINT, false)
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
