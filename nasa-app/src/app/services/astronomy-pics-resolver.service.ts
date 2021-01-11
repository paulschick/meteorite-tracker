import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NasaError } from '../models/nasaErrors.model';
import { IApd } from '../models/apd.model';
// import { AstroPicsService } from './astro-pics.service';
import { DataService } from './data.service';
import { NASA_API_KEY } from '../configs/nasa-config';

@Injectable({
  providedIn: 'root'
})
export class AstronomyPicsResolverService implements Resolve<IApd[] | NasaError> {
  private key: string = NASA_API_KEY;
  private tenDaysPrior: Date = new Date(Date.now() - 9 * 24 * 60 * 60 * 1000);
  public formattedDate: string = `${this.tenDaysPrior.getFullYear()}-${
    this.tenDaysPrior.getMonth() + 1
  }-${this.tenDaysPrior.getDate()}`;
  dateRangeUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.formattedDate}`;

  constructor(private dataService:DataService) {  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IApd[] | NasaError> {
    return this.dataService.getRequest(this.dateRangeUrl, false)
      .pipe(
        catchError(err => of(err))
      );
  }
}
