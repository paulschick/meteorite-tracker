import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteoriteService {

  meteoritesUrl:string = 'https://data.nasa.gov/resource/y77d-th95.json';

  constructor(private http:HttpClient) {}

  // make <Meteorite[]> after model/interface is created
  getMeteorites():Observable<any[]> {
    // this.http.get<Meteorite[]>();
    // returns Observable
    // since the url is a property in the class, we access it with 'this'
    return this.http.get<any[]>(this.meteoritesUrl);
  }



  // getMeteorites() {
  //   return METEORITES
  // }
}

// const METEORITES = [
//   {
//     id: 1,
//     name: 'Aachen',
//     mass: 21,
//     year: 1880
//   },
//   {
//     id: 2,
//     name: 'Aarhus',
//     mass: 720,
//     year: 1951
//   },
//   {
//     id: 3,
//     name: 'Abee',
//     mass: 107000,
//     year: 1952
//   },
//   {
//     id: 4,
//     name: 'Acapulco',
//     mass: 1914,
//     year: 1976
//   },
//   {
//     id: 5,
//     name: 'Achiras',
//     mass: 780,
//     year: 1902
//   },

// ]
