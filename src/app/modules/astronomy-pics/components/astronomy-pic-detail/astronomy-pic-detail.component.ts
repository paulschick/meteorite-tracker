import { Component, OnInit, OnDestroy } from '@angular/core';
import { AstroPicsService } from '../../services/astro-pics.service';
import { IApd } from '../../../../shared/models/apd.model';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'mt-astronomy-pic-detail',
  templateUrl: './astronomy-pic-detail.component.html',
  styleUrls: ['./astronomy-pic-detail.component.scss']
})
export class AstronomyPicDetailComponent implements OnInit, OnDestroy {

  detailImage: IApd[] = [];
  private astronomyPicObs = new Subject();

  constructor(private astroPicsService: AstroPicsService) { }

  ngOnInit(): void {
    var imageObservable = this.astroPicsService.getDetailImage('2020-12-26', this.detailImage);
    imageObservable.pipe(takeUntil(this.astronomyPicObs)).subscribe()
    console.log(this.detailImage);
  }

  ngOnDestroy(): void {
    this.astronomyPicObs.next();
    this.astronomyPicObs.complete();
  }

}
