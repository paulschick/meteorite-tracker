import { Injectable } from '@angular/core';

export interface ITempInterface {
  prop:string;
}

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  //* Sort By numbers Asc/Desc
  //? Uses: Meteorite -> Mass & Year
  //! typeof(+object.prop) === 'number';
  sortPropDesc(arr:ITempInterface[],prop:string):ITempInterface[] {
    return arr.sort((a,b) => +b.prop - +a.prop);
  }

  sortPropAsc(arr:ITempInterface[],prop:string):ITempInterface[] {
    return arr.sort((a,b) => +a.prop - +b.prop);
  }
  //*---------------------------------

  //* Sort string Asc/Desc
  //? Uses: Meteorite -> Name
  sortStringPropsDesc(arr:ITempInterface[],prop:string):ITempInterface[] {
    return arr.sort((a,b) => {
      return b.prop > a.prop ? 1 : b.prop === a.prop ? 0 : -1
    });
  }

  sortStringPropsAsc(arr:ITempInterface[],prop:string):ITempInterface[] {
    return arr.sort((a,b) => {
      return a.prop > b.prop ? 1 : a.prop === b.prop ? 0 : -1
    });
  }
  //*-----------------------------------
}
