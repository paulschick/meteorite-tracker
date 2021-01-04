import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NasaError } from '../../../../shared/models/nasaErrors';
import { IApd } from '../../../../shared/models/apd.model';
import { AstroPicsService } from '../../../core/services/astro-pics.service';

@Injectable({
  providedIn: 'root'
})
export class AstronomyPicsResolverService implements Resolve<IApd[] | NasaError> {

  constructor(private astroPicsService: AstroPicsService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApd[] | NasaError> {
    return this.astroPicsService.getFromDateRange()
      .pipe(
        catchError(err => of(err))
      );
  }
}
