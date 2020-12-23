import { Component, OnInit } from '@angular/core';
import {
  ApdService,
  IApd
} from './index';

@Component({
  selector: 'astronomy-picture-of-the-day',
  templateUrl: './apd.component.html',
  styleUrls: ['./apd.component.css']
})
export class ApdComponent implements OnInit {
  apd:IApd;
  apdUrl:string;

  constructor(private apdService:ApdService) {  }

  ngOnInit() {

    this.apdService.getApd().subscribe(image => {
      this.apd = image;
      this.apdUrl = image.url;
      console.log(this.apdUrl)
    })

  }
}
