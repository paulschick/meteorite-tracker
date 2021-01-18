import { Injectable } from '@angular/core';
import { Filter } from '../types/Functions';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  evenFilter:Filter;

  constructor() {
    this.evenFilter = (num) => { return (num % 2 == 0) }
  }

  filterIsEven(arr:number[],func:Filter) {
    return arr.filter(func);
  }
}
