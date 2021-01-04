import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IApd } from '../../shared/models/apd.model';
import { NasaError } from '../../shared/models/nasaErrors';
import { HomeService } from './home.service';

@Injectable({
  providedIn: 'root'
})
export class ApdResolverService implements Resolve<IApd | NasaError> {

  constructor(private homeService: HomeService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApd | NasaError> {
    return this.homeService.getApd()
      .pipe(
        catchError(err => of(err))
      );
  }
}
