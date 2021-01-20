import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  //* Sort By numbers Asc/Desc
  //? Uses: Meteorite -> Mass & Year
  sortPropDesc = <T, K extends keyof T>(arr: T[], prop: K) =>
  {
    return arr.sort((a,b) => +b[prop] - +a[prop]);
  }
  sortPropAsc = <T, K extends keyof T>(arr: T[], prop: K) =>
  {
    return arr.sort((a,b) => +a[prop] - +b[prop]);
  }
  //*---------------------------------

  //* Sort string Asc/Desc
  //? Uses: Meteorite -> Name
  sortStringPropsDesc = <T, K extends keyof T>(arr: T[],prop: K) =>
  {
    return arr.sort((a,b) => {
      return b[prop] > a[prop] ? 1 : b[prop] === a[prop] ? 0 : -1
    });
  }
  sortStringPropsAsc = <T, K extends keyof T>(arr: T[],prop: K) =>
  {
    return arr.sort((a,b) => {
      return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    });
  }
  //*-----------------------------------
}
