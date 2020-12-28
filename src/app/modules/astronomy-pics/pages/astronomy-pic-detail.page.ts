import { Component, OnInit, OnDestroy } from '@angular/core';
import { AstroPicsService } from '../services/astro-pics.service';
import { IApd } from '../../../shared/models/apd.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './astronomy-pic-detail.page.html'
})
export class AstronomyPicDetailPage implements OnInit, OnDestroy {

  detailImage: IApd[] = [];
  private astronomyPicSubject = new Subject();

  constructor(private astroPicsService: AstroPicsService) {  }

  ngOnInit() {
    var imageObservable = this.astroPicsService.getDetailImage('2020-12-26', this.detailImage);
    imageObservable.pipe(takeUntil(this.astronomyPicSubject)).subscribe()
    console.log(this.detailImage);
  }

  ngOnDestroy() {
    this.astronomyPicSubject.next();
    this.astronomyPicSubject.complete();
  }
}
