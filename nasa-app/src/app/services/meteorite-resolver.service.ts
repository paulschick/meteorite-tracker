import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMeteorite } from '../models/meteorite.model';
import { NasaError } from '../models/nasaErrors.model';
import { DataService } from './data.service';
import { ENDPOINT } from '../utils/nasa-endpoints';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteResolverService implements Resolve<IMeteorite[] | NasaError> {
  private _ENDPOINT:ENDPOINT;
  METEORITES_ENDPOINT:string;

  constructor(private dataService: DataService) {
    this._ENDPOINT = new ENDPOINT();
    this.METEORITES_ENDPOINT = this._ENDPOINT.METEORITES;
   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMeteorite[] | NasaError> {
    return this.dataService.getRequest(this.METEORITES_ENDPOINT, false)
      .pipe(
        catchError(err => of(err))
      );
  }
}
