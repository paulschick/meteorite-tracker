import { Injectable } from '@angular/core';
import { IMeteorite } from '../models/meteorite.model';

//^ Class is tested and passing for all sort functions with temporary interface

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  //* Sort By numbers Asc/Desc
  //? Uses: Meteorite -> Mass & Year
  sortPropDesc(arr:object[]|IMeteorite[],prop:string):object[]|IMeteorite[] {
    return arr.sort((a,b) => +b[prop] - +a[prop]);
  }

  sortPropAsc(arr:object[]|IMeteorite[],prop:string):object[]|IMeteorite[]
  {
    return arr.sort((a,b) => +a[prop] - +b[prop]);
  }
  //*---------------------------------

  //* Sort string Asc/Desc
  //? Uses: Meteorite -> Name
  sortStringPropsDesc(arr:object[]|IMeteorite[],prop:string):object[]|IMeteorite[]
  {
    return arr.sort((a,b) => {
      return b[prop] > a[prop] ? 1 : b[prop] === a[prop] ? 0 : -1
    });
  }

  sortStringPropsAsc(arr:object[]|IMeteorite[],prop:string):object[]|IMeteorite[]
  {
    return arr.sort((a,b) => {
      return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1
    });
  }
  //*-----------------------------------
}
