/*

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NASA_API_KEY } from '../configs/nasa-config';
import { NasaError } from '../models/nasaErrors.model';
import { IApd } from '../models/apd.model';
import { IMeteorite } from '../models/meteorite.model';

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

  public todaysImageUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}`;

  public dateRangeUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.formattedDate}`;

  public singleImageUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=`;

  // --------------------

  // Meteorites Endpoint
  meteoritesUrl: string = 'https://data.nasa.gov/resource/gh4g-9sfh.json';

  // Random Images Properties
  private randomQuery: string = '&count=';
  public randomEndpoint: string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}${this.randomQuery}`;

  constructor(private http: HttpClient) {}

  // Get Request Methods

  // Improvements:
  // Class should do one thing, does 4 things
  // These could all be consolidated into one get request which takes in url parameters from the component

  getFromDateRange(): Observable<IApd[] | NasaError> {
    return this.http.get<IApd[]>(`${this.dateRangeUrl}`).pipe(
      take(1),
      catchError((err) => this.handleHttpError(err))
    );
  }

  getDetailImage(dateString): Observable<IApd | NasaError> {
    return this.http.get<IApd>(`${this.singleImageUrl}${dateString}`).pipe(
      take(1),
      catchError((err) => this.handleHttpError(err))
    );
  }

  getAllMeteorites(): Observable<IMeteorite[] | NasaError> {
    return this.http.get<IMeteorite[]>(this.meteoritesUrl).pipe(
      take(1),
      catchError((err) => this.handleHttpError(err))
    );
  }

  // getRandomImages(numberImages:number): Observable<IApd[] | NasaError> {
  //   // client-side validation could be improved
  //   if (numberImages >= 25) {
  //     console.log(`Please reduce the number of images. ${numberImages} will result in long page loads`)
  //   } else {
  //     return this.http.get<IApd[]>(`${this.randomEndpoint}${numberImages.toString()}`)
  //       .pipe(
  //         take(1),
  //         catchError(err => this.handleHttpError(err))
  //       );
  //   }
  // }

  getRandomImg(url: string): Observable<IApd | NasaError> {
    return this.http
      .get<IApd>(url, { headers: { skip: 'true' } })
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

*/
