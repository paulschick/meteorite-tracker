import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IApd } from '../models/apd.model';
import { NasaError } from '../models/nasaErrors';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ApdResolverService implements Resolve<IApd | NasaError> {

  constructor(private dataService: DataService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApd | NasaError> {
    return this.dataService.getApd()
      .pipe(
        catchError(err => of(err))
      );
  }
}
