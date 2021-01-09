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

  images:any[];

  constructor(private http:HttpClient) {
    this.images = [];
   }

  // getReq(endpoint:string, action:any):Subscription {
  //   return this.http.get<any>(endpoint)
  //     .pipe(
  //       catchError((err:any) => this.handleHttpError(err)),
  //       map((response:any) => {
  //         return response;
  //       })
  //     ).subscribe(action)
  // }

  getImg(url:string):Subscription {
    return this.http.get<IApd>(url)
      .pipe(
        take(1),
        catchError(err => this.handleHttpError(err))
      )
      .subscribe((images:IApd) => this.images.push(images))
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
