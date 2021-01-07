import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IMeteorite } from '../models/meteorite.model';
import { NasaError } from '../models/nasaErrors.model';
import { AstroPicsService } from './astro-pics.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteResolverService implements Resolve<IMeteorite[] | NasaError> {

  constructor(private astroPicsService: AstroPicsService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMeteorite[] | NasaError> {
    return this.astroPicsService.getAllMeteorites()
      .pipe(
        catchError(err => of(err))
      );
  }
}
