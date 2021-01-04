import { Component, OnInit } from '@angular/core';
import { IApd } from '../../../../shared/models/apd.model';
import { HomeService } from '../../home.service';
import { NasaError } from '../../../../shared/models/nasaErrors';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'apd',
  templateUrl: './apd.component.html',
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
      this.apd = resolvedApd[0];
      this.apdUrl = this.apd.url;
    }
  }
}
