import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IMeteorite } from '../../shared/models/meteorite.model';
import { NasaError } from '../../shared/models/nasaErrors';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoritesResolverService implements Resolve<IMeteorite[] | NasaError> {

  constructor(private homeService: HomeService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMeteorite[] | NasaError> {
    return this.homeService.getAllMeteorites()
      .pipe(
        catchError(err => of(err))
      );
  }
}
