import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError, concatMap, mergeMap } from 'rxjs/operators';
import { NASA_API_KEY } from '../../core/configs/nasa-config';
import { NasaError } from '../../../shared/models/nasaErrors';
import { IApd } from '../../../shared/models/apd.model';
import { newArray } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class AstroPicsService {

  private astroPicsUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key: string = NASA_API_KEY;
  private queryDate: string = '&date=';
  public astroPicArray = [];

  constructor(private http: HttpClient) {}

  // ----------------------------------
  // Set up endpoints for gallery view

  datesArray:Date[] = [];
  daysPrior:number = 10;

  getDates = function() {
    for (let i=0;i<this.daysPrior;i++) {
      let myDate = new Date(Date.now() - (i+1) * 24 * 60 * 60 * 1000)
      let myDateStr = `${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`
      this.datesArray.push(myDateStr)
    }
    return this.datesArray
  }

  // ----------------------------------------
  // Get all gallery images

  returnedAstroPics(emptyArray) {
    return of(...this.getDates())
      .pipe(
        // tap(date => console.log('concatMap source Observable', date)),
        concatMap(date => this.http.get<IApd[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${date}`)),
        tap(data => emptyArray.push(data)),
        catchError(err => this.handleHttpError(err))
      );
  }

  // -------------------------------------------
  // Get single image based on date from url param
  // pass dateString as 'yyyy-mm-dd'

  getDetailImage(dateString, emptyArray) {
    return this.http.get<IApd[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${dateString}`)
      .pipe(
        tap(data => emptyArray.push(data)),
        catchError(err => this.handleHttpError(err))
      );
  }

  // -------------------------------------
  // Error Handling for all requests

  private handleHttpError(error: HttpErrorResponse): Observable<NasaError> {
    let dataError = new NasaError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.additionalMessage = 'An error occurred retrieving data from Nasa.';
    return throwError(dataError);
  }









}
