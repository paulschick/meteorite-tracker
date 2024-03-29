import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { of, Subscription, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { EvaluateBreakpointService } from '../../../core/services/evaluate-breakpoint.service';
import { MaterialBreakpointsService } from '../../../core/services/material-breakpoints.service';

@Component({
  selector: 'mt-random-image',
  templateUrl: './random-image.component.html',
  styleUrls: ['./random-image.component.scss']
})
export class RandomImageComponent implements OnInit, OnDestroy {

  @Output() postImg = new EventEmitter<any>();
  sub:Subscription;
  colNumber:number;


  IMG_DATA = {
    "copyright":"Laurie Hatch",
    "date":"2014-02-28",
    "explanation":"Only two days past full, February's moon shines through thin clouds, rising on the left in this fisheye night skyscape. The moonlight illuminates a weathered, rounded foreground in the Alabama Hills, conveniently located east of Mt. Whitney along the Sierra Nevada range in California, USA, planet Earth. Orion the Hunter stands at the right, a familiar northern winter constellation. Bright Jupiter, the solar system's ruling gas giant, is near center at the top of the frame. Below Jupiter, Sirius, alpha star of the Big Dog, poses above a bowed and twisted landform known as M\u00f6bius Arch, its curve reminiscent of the mathematically famous surface with only one side. Of course, instead of using rock, wind, and weather, a M\u00f6bius strip is easier to make with paper, scissors, and tape.",
    "hdurl":"https://apod.nasa.gov/apod/image/1402/LH8056_MobiusArchMoonrise_1024x683.jpg",
    "media_type":"image",
    "service_version":"v1",
    "title":"M\u00f6bius Arch Moonrise",
    "url":"https://apod.nasa.gov/apod/image/1402/LH8056_MobiusArchMoonrise_1024x683.jpg"
  }

  imgObservable:Observable<any> = of(this.IMG_DATA);

  constructor(private evaluateBreakpoint: EvaluateBreakpointService, private matService: MaterialBreakpointsService) { }

  ngOnInit(): void {
    this.sub = this.evaluateBreakpoint.screenSize
      .pipe(distinctUntilChanged())
      .subscribe((size) => {
        this.colNumber = this.matService.breakpointGrid[size];
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }

}
