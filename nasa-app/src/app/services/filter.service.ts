import { Injectable } from '@angular/core';
import { IMeteorite } from '../models/meteorite.model';
import { getYear } from '../utils/convert-to-year';

// export type filterObjects = [object[], string, boolean, number];
export interface IFilterObjectsByNum {
  objects: object[]|IMeteorite[];
  //* the object property to filter by
  property: string;
  //* if true, returns items greater than or equal to the comparison
  isGreater: boolean;
  comparison: number;
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  protected isIMeteorite(arr:object[]|IMeteorite[]): arr is IMeteorite[] {
    return (arr as IMeteorite[])[0].year !== undefined;
  }
  filterObjects = (arg:IFilterObjectsByNum):object[]|IMeteorite[] => {
    const objArray:object[]|IMeteorite[] = arg.objects;

    if (this.isIMeteorite(objArray) === true) {
      if (arg.property === 'year') {
        if (arg.isGreater === true) {
          return arg.objects.filter(x => getYear(x[arg.property]) >= arg.comparison);
        } else {
          return arg.objects.filter(x => getYear(x[arg.property]) <= arg.comparison);
        }
      } else if (arg.property === 'mass') {
        if (arg.isGreater === true) {
          return arg.objects.filter(x => +x[arg.property] >= arg.comparison);
        }
        else {
          return arg.objects.filter(x => +x[arg.property] <= arg.comparison);
        }
      }
    }

    if (this.isIMeteorite(objArray) === false) {
      if (arg.isGreater === true) {
        return arg.objects.filter(x => x[arg.property] >= arg.comparison);
      } else {
        return arg.objects.filter(x => x[arg.property] <= arg.comparison);
      }
    }
  }
}
