import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IMeteorite } from '../models/meteorite.model';
import { NasaError } from '../models/nasaErrors.model';
// import { AstroPicsService } from './astro-pics.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteResolverService implements Resolve<IMeteorite[] | NasaError> {
  meteoritesUrl: string = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

  constructor(private dataService: DataService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMeteorite[] | NasaError> {
    return this.dataService.getRequest(this.meteoritesUrl, false)
      .pipe(
        catchError(err => of(err))
      );
  }
}
