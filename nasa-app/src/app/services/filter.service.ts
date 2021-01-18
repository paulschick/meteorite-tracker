import { Injectable } from '@angular/core';

// export type filterObjects = [object[], string, boolean, number];
export interface filterObjectsByNum {
  objects: object[];
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
  filterObjects(arg:filterObjectsByNum):object[] {
    if (arg.isGreater === true) {
      return arg.objects.filter(x => x[arg.property] >= arg.comparison);
    } else {
      return arg.objects.filter(x => x[arg.property] <= arg.comparison);
    }
  }
}
