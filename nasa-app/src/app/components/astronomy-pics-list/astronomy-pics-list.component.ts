import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IApd } from '../../models/apd.model';
import { NasaError } from '../../models/nasaErrors.model';

@Component({
  selector: 'app-astronomy-pics-list',
  templateUrl: './astronomy-pics-list.component.html',
  styleUrls: ['./astronomy-pics-list.component.scss'],
})
export class AstronomyPicsListComponent implements OnInit {
  AstroPics: IApd[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let resolvedAstroPics: IApd[] | NasaError = this.route.snapshot.data[
      'resolvedAstronomyPics'
    ];

    if (resolvedAstroPics instanceof NasaError) {
      console.log(
        `Astronomy Pics List component error: ${resolvedAstroPics.additionalMessage}`
      );
    } else {
      this.AstroPics = resolvedAstroPics;
      console.log('Successfully retrieved Astronomy Images from Nasa API');
    }
  }
}
