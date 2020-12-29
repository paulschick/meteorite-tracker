import { Component, OnInit, OnDestroy } from '@angular/core';
import { AstroPicsService } from '../../services/astro-pics.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IApd } from '../../../../shared/models/apd.model';
import { NasaError } from 'src/app/shared/models/nasaErrors';

@Component({
  selector: 'mt-astronomy-pics-list',
  templateUrl: './astronomy-pics-list.component.html',
  styleUrls: ['./astronomy-pics-list.component.scss'],
})
export class AstronomyPicsListComponent implements OnInit, OnDestroy {
  // astroPics: IApd[] = [];
  newAstroPics: IApd[];

  // private astronomyPicsObs = new Subject();

  constructor(private astroPicsService: AstroPicsService) {}

  ngOnInit(): void {
    // let imagesObservable = this.astroPicsService.returnedAstroPics(
    //   this.astroPics
    // );
    // imagesObservable.pipe(takeUntil(this.astronomyPicsObs)).subscribe();

    // ---------

    this.astroPicsService.getFromDateRange().subscribe(
      (data: IApd[]) => (this.newAstroPics = data),
      (err: NasaError) => console.log(err),
      // () => console.log(this.newAstroPics)
      () => console.log('finished retrieving Astronomy Pictures of the Day')
    );



















    // ---------
  }

  ngOnDestroy(): void {
    // this.astronomyPicsObs.next();
    // this.astronomyPicsObs.complete();
  }
}
