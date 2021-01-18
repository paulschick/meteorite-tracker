import { Injectable } from '@angular/core';
import { Filter } from '../types/Functions';

export const FILTER_EVEN: Filter = x => x % 2 == 0;



@Injectable({
  providedIn: 'root',
})
export class FilterService {
  // evenFilter: Filter;

  private _unfilteredArray:number[]|object[];
  filteredArray:number[]|object[];
  // constructor() {
  //   this.evenFilter = (num) => {
  //     return num % 2 == 0;
  //   };
  // }

  // filterIsEven(arr: number[], func: Filter) {
  //   return arr.filter(func);
  // }

  // constructor(x:number[]|object[], func:Filter) {
  constructor(x:number[]|object[]) {
    // if (x.length > 0 && typeof(x[0]) === 'number') {
    //   this._unfilteredArray = x;
    //   this.filteredArray = this._unfilteredArray.filter(func);
    // }
    if (this.isNumArr(x)) {
      this.filteredArray = [1,2,3,4]
    } else {
      this.filteredArray = [{one:1},{two:2}]
    }

  }


  //* Return true if type is number array, and length is not 0
  // If not number arr, must be object arr
  isNumArr(arr: number[] | object[]): arr is number[] {
    return (arr as number[]) && typeof(arr[0]) === 'number';
  }


}

/*
    * BOTH OF THESE WORK
    ! Just don't call() the function

    @param numberArr = numberArr.filter(this.filterService.evenFilter);
    console.log(numberArr);
    numberArr = this.filterService.filterIsEven(numberArr, this.filterService.evenFilter);
    console.log(numberArr)
    */


/*
TODO: What do I need this to do truly? -> working with objects primarily, make this able to accept more arguments


IF I have a base filter service, I should be able to add functionality through external classes
So maybe define a class with different filter functions that can be used, and just passed into the filter service.




*/
