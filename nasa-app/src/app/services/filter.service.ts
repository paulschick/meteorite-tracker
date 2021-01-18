import { Injectable } from '@angular/core';
import { IMeteorite } from '../models/meteorite.model';
import { Filter } from '../types/Functions';

export const FILTER_EVEN: Filter = x => x % 2 == 0;



@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _unfilteredArray:number[]|IMeteorite[];
  filteredArray:any[];
  constructor(x:number[]|IMeteorite[]) {
    if (this.isNumArr(x)) {
      this.filteredArray = [1,2,3,4]
    } else if (this.isMeteoriteArr(x)) {
      this.filteredArray = x.filter(y => y.year !== null)
    }

  }

  //* Return true if type is number array
  isNumArr(arr: number[] | object[]): arr is number[] {
    return (arr as number[]) && typeof(arr[0]) === 'number';
  }

  isMeteoriteArr(arr:number[]|IMeteorite[]): arr is IMeteorite[] {
    return (arr as IMeteorite[])[0].year !== undefined;
  }

}

/*

  TODO: Moving Forward -> Applying Conditional types with Type Guards, using custom types, and creating a reusable filter function

  * 1. Have a list of isType functions that can be used
  So, I have the reusable filter function, it takes in the array, it takes in a function -> most reusable, but least useful because the component needs to define the array and the function anyway, so this isn't saving any code there.
  * 2. Allow it to take in multiple arrays, check the type, and filter depending on the type and some other parameter that tells it how to filter.
  What would this return?
  The number of returned variables is limited by how many properties I define
  Unless I emit a Subject/Observable, this would be odd.
  What would the Observable output? A continuously filtering array? Or an array of filtered arrays? What about an object of tuples where the key describes the filtered array and the value is the filtered array?

  ! Array of tuples of filtered arrrays

  return:CustomTupleType = [
    [filteredByMassDesc, [{...},{...},{...},{...}]],
    [filteredByMassAsc, [{...},{...},{...},{...}]],
    [filteredAlphabeticallyAsc, [{...},{...},{...},{...}]],
    [filteredAlphabeticallyDesc, [{...},{...},{...},{...}]],
  ];

  !! Or just Tuples!

  a tuple can specify, like, the first two indexes [0,1] and these are the key-value pair.
  The rest of the tuple cn be a normal array so check it out...

  ? Example of a tuple containing meteorites filtered by mass Ascending

  * let meteoritesMassAsc: [ number, string ] = [1, 'meteorites-ascending', {...},{...},{...}]
  So you would use this by passing in the array to a function.
  It looks at index 0 and index 1 to identify the array.
  Then it takes a slice starting at index 2, and that's your filtered meteorite array.
  This is pretty cool.

  So the service can take my original meteorite array, and it can filter it multiple ways.
  Then, it will return a tuple of tuples.
  For example, sorting mass ascending and descending:

  ! 01 -> meteorite mass
  ! 02 -> meteorite year
  ? type filterTuple = [ number, string ];
  ? let filteredMeteorites: filterTuple[] = [
    [01, 'ascending', {...}, {...}, {...}],  -> //? this is filtered by mass ascending
    [01, 'descending', {...}, {...}, {...}], -> //? this is filtered by mass descending
    [02, 'ascending', {...}, {...}, {...}],  -> //? this is filtered by year ascending
    [02, 'descending', {...}, {...}, {...}], -> //? this is filtered by year descending
  ]




*/
