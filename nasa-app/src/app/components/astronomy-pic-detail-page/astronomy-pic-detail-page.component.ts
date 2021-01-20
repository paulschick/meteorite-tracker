import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';
import { NASA_API_KEY } from '../../configs/nasa-config';
import { DataService } from '../../services/data.service';

// test
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-astronomy-pic-detail-page',
  templateUrl: './astronomy-pic-detail-page.component.html'
})
export class AstronomyPicDetailPageComponent implements OnInit, OnDestroy {
  key:string = NASA_API_KEY;
  detailImages: IApd[] = [];
  urlObservable:Observable<string>;
  sub:Subscription;
  currentRoute:string;

  constructor(private dataService:DataService,
              private route: ActivatedRoute) {  }

  ngOnInit() {

    const imageDate: string = this.route.snapshot.paramMap.get('date')
    const detailImageUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=${imageDate}`;

    this.dataService.getRequest(detailImageUrl, false).subscribe(
      (data: IApd) => (this.detailImages.push(data)),
      (err: NasaError) => console.log(err),
      () => console.log('finished retrieving single Astronomy Picture from Nasa')
    );

    this.urlObservable = this.route.url.pipe(
      map(segments => segments.join(''))
    );
    this.sub = this.urlObservable.subscribe(
      data => this.currentRoute = data
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }

}
