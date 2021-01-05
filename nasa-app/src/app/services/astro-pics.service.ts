import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NASA_API_KEY } from '../configs/nasa-config';
import { NasaError } from '../models/nasaErrors.model';
import { IApd } from '../models/apd.model';

@Injectable({
  providedIn: 'root',
})
export class AstroPicsService {
  private astroPicsUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key: string = NASA_API_KEY;
  private queryDate: string = '&date=';
  private randomQuery:string = '&count=2';
  private myDate: Date = new Date(Date.now() - 9 * 24 * 60 * 60 * 1000);
  public formattedDate: string = `${this.myDate.getFullYear()}-${
    this.myDate.getMonth() + 1
  }-${this.myDate.getDate()}`;

  constructor(private http: HttpClient) {}

  getFromDateRange(): Observable<IApd[] | NasaError> {
    return this.http
      .get<IApd[]>(
        `${this.astroPicsUrl}${this.key}&start_date=${this.formattedDate}`
      )
      .pipe(
        take(1),
        catchError((err) => this.handleHttpError(err))
      );
  }

  getDetailImage(dateString): Observable<IApd | NasaError> {
    return this.http
      .get<IApd>(
        `${this.astroPicsUrl}${this.key}${this.queryDate}${dateString}`
      )
      .pipe(
        take(1),
        catchError((err) => this.handleHttpError(err))
      );
  }

  getRandomImages(): Observable<IApd | NasaError> {
    return this.http.get<IApd>(`${this.astroPicsUrl}${this.key}${this.randomQuery}`)
      .pipe(
        take(1),
        catchError(err => this.handleHttpError(err))
      );
  }

  // ----------------------

  // -------------------------------------
  // Error Handling for all requests

  private handleHttpError(error: HttpErrorResponse): Observable<NasaError> {
    let dataError = new NasaError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.additionalMessage =
      'An error occurred retrieving data from Nasa.';
    return throwError(dataError);
  }
}
