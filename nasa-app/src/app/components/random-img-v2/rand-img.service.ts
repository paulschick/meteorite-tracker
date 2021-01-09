import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
import { NasaError } from '../../models/nasaErrors.model';
import { IApd } from 'src/app/models/apd.model';

@Injectable({
  providedIn: 'root'
})
export class RandImgService {

  constructor(private http:HttpClient) { }

  // getReq(endpoint:string, action:any):Subscription {
  //   return this.http.get<any>(endpoint)
  //     .pipe(
  //       catchError((err:any) => this.handleHttpError(err)),
  //       map((response:any) => {
  //         return response;
  //       })
  //     ).subscribe(action)
  // }

  getImg(url:string):Observable<IApd | NasaError> {
    return this.http.get<IApd>(url)
      .pipe(
        take(1),
        catchError(err => this.handleHttpError(err))
      );
  }

  receiveClick(event:any, url:string) {
    if (event) {
      console.log(`RandImgService: Event Received: ${event}`);
      this.getImg(url).subscribe(
        console.log
      )
    }
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
