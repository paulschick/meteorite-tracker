import { Component, OnInit } from '@angular/core';
import { IApd } from '../../../../shared/models/apd.model';
import { HomeService } from '../../home.service';
import { NasaError } from '../../../../shared/models/nasaErrors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'apd',
  template: `
    <div class="container apd-container">
      <div class="apd-wrapper">
        <h2 class="text-primary">Astronomy Picture of the Day</h2>
      </div>
      <div class="apd-img-wrapper">
        <img [src]="apdUrl" alt="Astronomy Picture of the Day">
      </div>
    </div>
  `,
  styleUrls: ['./apd.component.scss']
})
export class ApdComponent implements OnInit {
  apd:IApd;
  apdUrl:string;

  constructor(private homeService: HomeService,
              private route: ActivatedRoute) {  }

  ngOnInit() {

    let resolvedApd: IApd | NasaError = this.route.snapshot.data['resolvedApd'];

    if (resolvedApd instanceof NasaError) {
      console.log(`Apd Component error: ${resolvedApd.additionalMessage}`);
    } else {
      this.apd = resolvedApd;
      this.apdUrl = this.apd.url;
    }
  }
}
