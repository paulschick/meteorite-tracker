import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';
import { NASA_API_KEY } from '../../configs/nasa-config';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-astronomy-pic-detail-page',
  templateUrl: './astronomy-pic-detail-page.component.html'
})
export class AstronomyPicDetailPageComponent implements OnInit {
  key:string = NASA_API_KEY;
  detailImages: IApd[] = [];

  constructor(private dataService:DataService,
              private route: ActivatedRoute) {  }

  ngOnInit() {

    const imageDate = this.route.snapshot.paramMap.get('date')
    const detailImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=${imageDate}`;

    this.dataService.getRequest(detailImageUrl, false).subscribe(
      (data: IApd) => (this.detailImages.push(data)),
      (err: NasaError) => console.log(err),
      () => console.log('finished retrieving single Astronomy Picture from Nasa')
    );
  }

}
