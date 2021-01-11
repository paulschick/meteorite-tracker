import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NasaError } from '../models/nasaErrors.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRequest(url:string, shouldSkip:boolean):Observable<any | NasaError> {
    let getReq:Observable<any>;

    if(shouldSkip===true) {
      getReq = this.http.get<any>(url, { headers: { skip: 'true' } });
    }
    else {
      getReq = this.http.get<any>(url);
    }
    return getReq.pipe(
      take(1),
      catchError((err) => this.handleHttpError(err))
    );
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
