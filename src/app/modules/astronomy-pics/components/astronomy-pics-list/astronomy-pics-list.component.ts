import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AstroPicsService } from '../../../core/services/astro-pics.service';
import { IApd } from '../../../../shared/models/apd.model';
import { NasaError } from 'src/app/shared/models/nasaErrors';

@Component({
  selector: 'mt-astronomy-pics-list',
  templateUrl: './astronomy-pics-list.component.html',
  styleUrls: ['./astronomy-pics-list.component.scss'],
})
export class AstronomyPicsListComponent implements OnInit {
  AstroPics: IApd[];

  constructor(private astroPicsService: AstroPicsService) {}

  ngOnInit(): void {

    this.astroPicsService.getFromDateRange().subscribe(
      (data: IApd[]) => (this.AstroPics = data),
      (err: NasaError) => console.log(err),
      () => console.log('finished retrieving Astronomy Pictures of the Day')
    );

  }
}
