import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, concatAll, map, concatMap } from 'rxjs/operators';
import { NasaError } from '../../../shared/models/nasaErrors';
import { AstroPicsService } from './astro-pics.service';
import { IApd } from '../../../shared/models/apd.model';

@Injectable({
  providedIn: 'root'
})
export class AstroPicsResolverService implements Resolve<IApd[] | NasaError> {

  constructor(private astroPicsService:AstroPicsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApd[] | NasaError> {
    return this.astroPicsService.returnedAstroPics()
      // .pipe(map( data => data ),
      //   catchError(err => of(err))
      // );
      .pipe(catchError(err => of(err)));
  }
}
