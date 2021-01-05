import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NASA_API_KEY } from '../configs/nasa-config';
import { NasaError } from '../models/nasaErrors.model';
import { IApd } from '../models/apd.model';

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {
  private key:string = NASA_API_KEY;
  private randomQuery:string = '&count=';
  private fullEndpoint:string = `https://api.nasa.gov/planetary/apod?api_key=${this.key}${this.randomQuery}`;

  constructor(private http: HttpClient) { }

  getRandomImages(numberImages:number): Observable<IApd[] | NasaError> {
    if (numberImages >= 25) {
      console.log(`Please reduce the number of images. ${numberImages} will result in long page loads`)
    } else {
      return this.http.get<IApd[]>(`${this.fullEndpoint}${numberImages.toString()}`)
        .pipe(
          take(1),
          catchError(err => this.handleHttpError(err))
        );
    }
  }

  private handleHttpError(error: HttpErrorResponse): Observable<NasaError> {
    let dataError = new NasaError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.additionalMessage =
      'An error occurred retrieving data from Nasa.';
    return throwError(dataError);
  }
}
