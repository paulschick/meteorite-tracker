import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IMeteorite } from '../models/meteorite.model';
import { NasaError } from '../models/nasaErrors';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class MeteoritesResolverService implements Resolve<IMeteorite[] | NasaError> {

  constructor(private dataService: DataService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMeteorite[] | NasaError> {
    return this.dataService.getAllMeteorites()
      .pipe(
        catchError(err => of(err))
      );
  }
}
