import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, catchError, concatMap } from 'rxjs/operators';
import { NASA_API_KEY } from '../../core/configs/nasa-config';
import { NasaError } from '../../../shared/models/nasaErrors';
import { IApd } from '../../../shared/models/apd.model';

@Injectable({
  providedIn: 'root',
})
export class AstroPicsService {
  private astroPicsUrl: string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key: string = NASA_API_KEY;
  private queryDate: string = '&date=';
  private dynamicDate: string = '2020-12-26';
  // remove default value, for initial dev
  // '2020-12-26' for date addition
  public astroPicArray = [];

  constructor(private http: HttpClient) {}

  // getAstroPic():Observable<any[]>{
  //   return this.http.get<any[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${this.dynamicDate}`)
  // }

  astroPics = this.http
    .get<IApd[]>(
      `${this.astroPicsUrl}${this.key}${this.queryDate}${this.dynamicDate}`
    )
    .pipe(map((pics) => this.astroPicArray.push(pics)));

  // testing concatMap
  // this is literally the answer right here.
  exampleConcatMap = of('2020-12-01', '2020-12-02', '2020-12-03', '2020-12-04')
      .pipe(
        tap(date => console.log('concatMap source Observable', date)),
        concatMap(date => this.http.get<IApd[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${date}`))
      );
}
