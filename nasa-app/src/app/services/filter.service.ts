import { Injectable } from '@angular/core';
import { IMeteorite } from '../models/meteorite.model';
import { getYear } from '../utils/date-methods';
import { IFilterObject } from '../models/filter-object';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  //^ isIMeteorite passes true/false test
  public isIMeteorite(arr:object[]|IMeteorite[]): arr is IMeteorite[] {
    return (arr as IMeteorite[])[0].year !== undefined;
  }

  filterObjects = (arg:IFilterObject):object[]|IMeteorite[] => {
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
