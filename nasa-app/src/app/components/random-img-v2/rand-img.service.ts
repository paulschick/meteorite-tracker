import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription, throwError } from 'rxjs';
import { catchError, take, map } from 'rxjs/operators';
import { NasaError } from '../../models/nasaErrors.model';
import { IApd } from 'src/app/models/apd.model';

@Injectable({
  providedIn: 'root'
})
export class RandImgService {
  constructor(private http:HttpClient) {

   }

  getImg(url:string):Observable<IApd | NasaError> {
    return this.http.get<IApd>(url)
      .pipe(
        take(1),
        catchError(err => this.handleHttpError(err))
      )
  }



  private handleHttpError(error: HttpErrorResponse): Observable<NasaError> {
    let dataError = new NasaError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.additionalMessage =
      'An error occurred in RandImgService';
    return throwError(dataError);
  }
}

