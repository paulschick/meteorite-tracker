import { Component, OnInit } from '@angular/core';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apd',
  templateUrl: './apd.component.html',
  styleUrls: ['./apd.component.scss']
})
export class ApdComponent implements OnInit {
  apd:IApd;
  apdUrl:string;
  isImageLoading:boolean;

  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {

    this.isImageLoading = true;

    let resolvedApd: IApd | NasaError = this.route.snapshot.data['resolvedApd'];

    if (resolvedApd instanceof NasaError) {
      console.log(`Apd Component error: ${resolvedApd.additionalMessage}`);
    } else {
      this.apd = resolvedApd[0];
      this.apdUrl = this.apd.url;
    }
  }

  hideImageLoader() {
    this.isImageLoading = false;
  }
}
