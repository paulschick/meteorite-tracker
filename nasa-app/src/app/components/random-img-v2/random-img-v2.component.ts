import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IApd } from '../../models/apd.model';

@Component({
  selector: 'app-random-img-v2',
  templateUrl: './random-img-v2.component.html',
  styleUrls: ['./random-img-v2.component.scss'],
})
export class RandomImgV2Component implements OnInit, OnDestroy {

  sub: Subscription;
  randomImageArray: IApd[] = [];

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe;
  }
}

