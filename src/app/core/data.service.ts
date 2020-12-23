import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IMeteorite } from '../models/meteorite.model';
import { IApd } from '../models/apd.model';
import { NASA_API_KEY } from '../nasa-config';
import { NasaError } from '../models/nasaErrors';

@Injectable()
export class DataService {

  private meteoritesUrl:string = 'https://data.nasa.gov/resource/gh4g-9sfh.json';
  private apdUrl:string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key:string = NASA_API_KEY;

  constructor(private http: HttpClient) {  }

  getAllMeteorites():Observable<IMeteorite[] | NasaError>{
    return this.http.get<IMeteorite[]>(this.meteoritesUrl)
      .pipe(
        catchError(err => this.handleHttpError(err))
      );
  }

  getApd():Observable<IApd | NasaError>{
    return this.http.get<IApd>(`${this.apdUrl}${this.key}`)
      .pipe(
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
