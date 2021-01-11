// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, take } from 'rxjs/operators';
// import { NasaError } from '../../models/nasaErrors.model';
// import { IApd } from 'src/app/models/apd.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class RandImgService {

//   constructor(private http:HttpClient) {  }

//   getImg(url:string):Observable<IApd | NasaError> {
//     return this.http.get<IApd>(url, {headers:{skip:"true"}})
//       .pipe(
//         take(1),
//         catchError(err => this.handleHttpError(err))
//       )
//   }

//   private handleHttpError(error: HttpErrorResponse): Observable<NasaError> {
//     let dataError = new NasaError();
//     dataError.errorNumber = 100;
//     dataError.message = error.statusText;
//     dataError.additionalMessage =
//       'An error occurred in RandImgService';
//     return throwError(dataError);
//   }
// }

/*
This needs to be consolidated into the main service
These will all be combined into one (or two if necessary) get requests that will take in the url
Maybe I can have an optional second arg but I don't think I"ll need to
Maybe rename astro-pics service to something like DataService
*/
