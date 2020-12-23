import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';
import { IApd } from '../index';
import { NASA_API_KEY } from '../../nasa-config';

@Injectable({
  providedIn: 'root'
})
export class ApdService {

  private apdUrl:string = 'https://api.nasa.gov/planetary/apod?api_key=';
  private key:string = NASA_API_KEY;

  constructor(private http:HttpClient) {}

  getApd():Observable<IApd>{
    return this.http.get<IApd>(`${this.apdUrl}${this.key}`)
      .pipe(catchError(this.handleError<any>('getApd', [])))

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}
