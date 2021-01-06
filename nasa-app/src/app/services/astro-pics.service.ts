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

  // Arrange Endpoint Construction

  private key: string = NASA_API_KEY;
  private tenDaysPrior: Date = new Date(Date.now() - 9 * 24 * 60 * 60 * 1000);
  public formattedDate: string = `${this.tenDaysPrior.getFullYear()}-${
    this.tenDaysPrior.getMonth() + 1
  }-${this.tenDaysPrior.getDate()}`;

  // --------------------

  // Astronomy Image of the Day Endpoints

  public todaysImageUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}`;

  public dateRangeUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.formattedDate}`;

  public singleImageUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=`;

  // --------------------


  constructor(private http: HttpClient) {}

  // Get Request Methods

  getFromDateRange(): Observable<IApd[] | NasaError> {
    return this.http
      .get<IApd[]>(
        `${this.dateRangeUrl}`
      )
      .pipe(
        take(1),
        catchError((err) => this.handleHttpError(err))
      );
  }

  getDetailImage(dateString): Observable<IApd | NasaError> {
    return this.http
      .get<IApd>(
        `${this.singleImageUrl}${dateString}`
      )
      .pipe(
        take(1),
        catchError((err) => this.handleHttpError(err))
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
