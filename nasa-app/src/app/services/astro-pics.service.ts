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

  // Refactoring Needed:
  // Concat the endpoints before passing into the GET requests

  // --------------------
  // Original

  private astroPicsUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key: string = NASA_API_KEY;
  private queryDate: string = '&date=';
  private myDate: Date = new Date(Date.now() - 9 * 24 * 60 * 60 * 1000);
  public formattedDate: string = `${this.myDate.getFullYear()}-${
    this.myDate.getMonth() + 1
  }-${this.myDate.getDate()}`;

  // --------------------

  // --------------------
  // Original

  private _astroPicsUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private _key: string = NASA_API_KEY;
  private _queryDate: string = '&date=';
  private _myDate: Date = new Date(Date.now() - 9 * 24 * 60 * 60 * 1000);
  public _formattedDate: string = `${this._myDate.getFullYear()}-${
    this._myDate.getMonth() + 1
  }-${this._myDate.getDate()}`;

  // date range from today
  // ${this.astroPicsUrl}${this.key}&start_date=${this.formattedDate}`
  _dateRangeUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this._key}&start_date=${this._formattedDate}`

  // single image
  // `${this.astroPicsUrl}${this.key}${this.queryDate}${dateString}`
  _singleImageUrl:string = `https://api.nasa.gov/planetary/apod?api_key=${this._key}&date=`
  // use single image in the function just like:
  // get(`this._singleImageUrl${dateString}`)

  // All I'm doing here is two things:
  // 1. Better naming
  // 2. Move url construction the the class, not the method









  // --------------------






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
