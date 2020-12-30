import { Component, OnInit } from '@angular/core';
import { IApd } from '../../../../shared/models/apd.model';

@Component({
  selector: 'mt-random-image-page',
  templateUrl: './random-image-page.component.html',
  styleUrls: ['./random-image-page.component.scss']
})
export class RandomImagePageComponent implements OnInit {

  randImages = new Array<string>();

  receiveNotification(notification: any) {
    this.randImages.push(notification);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
