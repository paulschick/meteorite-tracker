import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IApd } from '../models/apd.model';
import { NasaError } from '../models/nasaErrors.model';
import { AstroPicsService } from './astro-pics.service';

@Injectable({
  providedIn: 'root'
})
export class RandomImageResolverService implements Resolve<IApd | NasaError> {

  constructor(private astroPicsService: AstroPicsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<IApd | NasaError> {
    return this.astroPicsService.getRandomImages()
      .pipe(
        catchError(err => of(err))
      );
  }
}
