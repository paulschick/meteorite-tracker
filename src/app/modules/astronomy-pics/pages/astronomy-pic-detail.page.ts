import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AstroPicsService } from '../services/astro-pics.service';
import { IApd } from '../../../shared/models/apd.model';
import { NasaError } from 'src/app/shared/models/nasaErrors';

@Component({
  templateUrl: './astronomy-pic-detail.page.html',
  styleUrls: ['./astronomy-pic-detail.page.scss']
})
export class AstronomyPicDetailPage implements OnInit {

  detailImages: IApd[] = [];

  constructor(private astroPicsService: AstroPicsService,
              private route: ActivatedRoute) {  }

  ngOnInit() {

    const imageDate = this.route.snapshot.paramMap.get('date')

    this.astroPicsService.getDetailImage(imageDate).subscribe(
      (data: IApd) => (this.detailImages.push(data)),
      (err: NasaError) => console.log(err),
      () => console.log('finished retrieving single Astronomy Picture from Nasa')
    );
  }
}
