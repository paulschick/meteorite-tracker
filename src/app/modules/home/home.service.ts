import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { IMeteorite } from '../../shared/models/meteorite.model';
import { IApd } from '../../shared/models/apd.model';
import { NASA_API_KEY } from '../core/configs/nasa-config';
import { NasaError } from '../../shared/models/nasaErrors';

@Injectable()
export class HomeService {

  private meteoritesUrl:string = 'https://data.nasa.gov/resource/gh4g-9sfh.json';
  private apdUrl:string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private randomQuery:string = '&count=1';
  private key:string = NASA_API_KEY;

  constructor(private http: HttpClient) {  }

  getAllMeteorites():Observable<IMeteorite[] | NasaError>{
    return this.http.get<IMeteorite[]>(this.meteoritesUrl)
      .pipe(
        take(1),
        catchError(err => this.handleHttpError(err))
      );
  }

  getApd():Observable<IApd | NasaError>{
    return this.http.get<IApd>(`${this.apdUrl}${this.key}${this.randomQuery}`)
      .pipe(
        take(1),
        catchError(err => this.handleHttpError(err))
      );
  }

  private handleHttpError(error: HttpErrorResponse): Observable<NasaError> {
    let dataError = new NasaError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.additionalMessage = 'An error occurred retrieving data from Nasa.';
    return throwError(dataError);
  }

}
