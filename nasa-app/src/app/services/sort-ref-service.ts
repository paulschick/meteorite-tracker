
import { Injectable } from '@angular/core';
import { ISortingObject } from '../models/sorting-object';

export interface ITempInterface {
  prop: string;
}

@Injectable({
  providedIn: 'root',
})
export class SortService {
  // constructor() { }

  //* Sort By numbers Asc/Desc
  //? Uses: Meteorite -> Mass & Year
  //! typeof(+object.prop) === 'number';
  sortPropDesc(arr: ITempInterface[], prop: string): ITempInterface[] {
    return arr.sort((a, b) => +b.prop - +a.prop);
  }

  sortPropAsc(arr: ITempInterface[], prop: string): ITempInterface[] {
    return arr.sort((a, b) => +a.prop - +b.prop);
  }
  //*---------------------------------

  //* Sort string Asc/Desc
  //? Uses: Meteorite -> Name
  sortStringPropsDesc(arr: ITempInterface[], prop: string): ITempInterface[] {
    return arr.sort((a, b) => {
      return b.prop > a.prop ? 1 : b.prop === a.prop ? 0 : -1;
    });
  }

  sortStringPropsAsc(arr: ITempInterface[], prop: string): ITempInterface[] {
    return arr.sort((a, b) => {
      return a.prop > b.prop ? 1 : a.prop === b.prop ? 0 : -1;
    });
  }
  //*-----------------------------------

  //!---------------------------------------------------
  //!---------------------------------------------------
  //!---------------------------------------------------
  //!---------------------------------------------------

  //!----------     COMBINE FUNCTION HERE      ---------
  //!----------                                ---------
  //!----------                                ---------

  /*

    ? sorting numbers or string ?
    ? ascending or descending   ?
    ? array of objects          ?
    ? pass in obj.prop to sort  ?
    * for num, take in num or string, conv to num, check if number
    typeof(+object.prop) === 'number';
              interface obj
              {
                isStringSort: boolean;
                isAscending: boolean;
                property: string;
                unsortedArr: object[];
              }
  */

  sortObjects(arr: ISortingObject): object[] {
    //! can remove these constants to shorten
    const _isStringSort = arr.isStringSort;
    const _isAscending = arr.isAscending;
    const _property = arr.property;
    const _unsortedArr = arr.unsortedArr;
    //!-----------------------------------

    switch (true) {
      case arr.isStringSort === true: {
        switch (true) {
          case arr.isAscending === true: {
            //* sort strings ascending //
            return arr.unsortedArr.sort((a, b) => {
              return a[arr.property] > b[arr.property]
                ? 1
                : a[arr.property] === b[arr.property]
                ? 0
                : -1;
            });
          }
          case arr.isAscending === false: {
            //* sort strings descending //
            return arr.unsortedArr.sort((a, b) => {
              return b[arr.property] > a[arr.property]
                ? 1
                : b[arr.property] === a[arr.property]
                ? 0
                : -1;
            });
          }
        }
      }
      case arr.isStringSort === false: {
        switch (true) {
          case arr.isAscending === true: {
            //* sort numbers ascending //
            return arr.unsortedArr.sort((a, b) => {
              try {
                return +a[arr.property] - +b[arr.property];
              } catch (err) {
                return a[arr.property] > b[arr.property]
                  ? 1
                  : a[arr.property] === b[arr.property]
                  ? 0
                  : -1;
              }
            });
          }
          case arr.isAscending === false: {
            //* sort numbers descending //
            return arr.unsortedArr.sort((a, b) => {
              try {
                return +b[arr.property] - +a[arr.property];
              } catch (err) {
                return b[arr.property] > a[arr.property]
                  ? 1
                  : b[arr.property] === a[arr.property]
                  ? 0
                  : -1;
              }
            });
          }
        }
      }
    }
  }
}
