import { Component, OnInit, OnDestroy } from '@angular/core';
import { AstroPicsService } from '../../services/astro-pics.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { IApd } from '../../../../shared/models/apd.model';

@Component({
  selector: 'mt-astronomy-pics-list',
  templateUrl: './astronomy-pics-list.component.html',
  styleUrls: ['./astronomy-pics-list.component.scss'],
})
export class AstronomyPicsListComponent implements OnInit, OnDestroy {
  astroPics: IApd[] = [];
  astroPicsClone: IApd[];

  private astronomyPicsObs = new Subject();

  constructor(private astroPicsService: AstroPicsService) {}

  ngOnInit(): void {
    var observable1 = this.astroPicsService.returnedAstroPics(this.astroPics);
    observable1.pipe(takeUntil(this.astronomyPicsObs), tap()).subscribe();
  }

  ngOnDestroy() {
    this.astronomyPicsObs.next();
    this.astronomyPicsObs.complete();
  }
}
