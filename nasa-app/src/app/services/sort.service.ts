import { Injectable } from '@angular/core';
import { IMeteorite } from '../models/meteorite.model';
import { ISortingObject } from '../models/sorting-object';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  sortObjects(arr: ISortingObject): object[]|IMeteorite[] {
    switch (true) {
      case arr.isStringSort === true: {
        switch (true) {
          case arr.isAscending === true: {
            console.log('case ascending:  ' + true)
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
            console.log('case descending:  ' + true)
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
