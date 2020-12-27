import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NASA_API_KEY } from '../../core/configs/nasa-config';
import { NasaError } from '../../../shared/models/nasaErrors';

@Injectable({
  providedIn: 'root'
})
export class AstroPicsService {

  private astroPicsUrl:string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key:string = NASA_API_KEY;
  private queryDate:string = '&date=';
  private dynamicDate:string = '2020-12-26';
  // remove default value, for initial dev
  // '2020-12-26' for date addition
  public astroPicArray;

  constructor(private http: HttpClient) { }

  getAstroPic():Observable<any[]>{
    return this.http.get<any[]>(`${this.astroPicsUrl}${this.key}${this.queryDate}${this.dynamicDate}`)
  }
}
