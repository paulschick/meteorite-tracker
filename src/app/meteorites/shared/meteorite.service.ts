import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteService {

  meteoritesUrl:string = 'https://data.nasa.gov/resource/y77d-th95.json';
  private meteorites: Observable<any[]>;

  constructor(private http:HttpClient) {}

  // make <Meteorite[]> after model/interface is created
  getMeteorites():Observable<any[]> {
    // this.http.get<Meteorite[]>();
    // returns Observable
    // since the url is a property in the class, we access it with 'this'
    return this.http.get<any[]>(this.meteoritesUrl)
      .pipe(catchError(this.handleError<any[]>('getMeteorites', [])))

  }

  // Handle Errors
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }


}
