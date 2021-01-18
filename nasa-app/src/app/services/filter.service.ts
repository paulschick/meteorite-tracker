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
      TODO: Steps Moving Forward:
      ? 1. create util for converting IMeteorite year property into what it needs to be for filtering
      ? 2. create custom tuple type for the input data to this service [ string, string, object[] ]
                  -> takes in descending/ascending, property, and array of the objects to filter.
      ? 3. start adding the functionality




*/




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

  ?? What does this function need in order to do that?
  Well if it is always returning this data structure here, then it just needs the original array.
  For a reusable service, or a library, you would need to tell it what object properties to filter by, and what filtered arrays you want back
  the same really is true for filtering, and even better would be to tell it if you want the data to be filtered or sorted.

  ! Here's a more realistic idea of the tuple type:


  ? type FilteredMeteorites: [string, IMeteorite[]];
  ? let filtered: FilteredMeteorites[] = [
    ['mass-descending',[{...},{...},{...},...]],
    ['mass-ascending',[{...},{...},{...},...]],
  ];

  and that feels a lot simpler too.
  An array with a string and another array.
  The tougher part is getting to the data that you need from inside of this data structure.

  Why is this good?
  It can definitely be immutable.
  I'm always returning copies as the filtered data, the original never changes.
  A problem though is that it's simply overkill with what I'm using.
  I could still use a tuple to return the one piece of data.
  Or, the instance of the service could receive a tuple that contains a string for the type of filter, contains the variable to index the object by, and contains an array of objects to filter.

  Yes, this filter will be reusable but only for objects.

  ? type filterThis = [string, string, object[]];
  ? constructor(private unfilteredData:filterThis) {}

  ? pass in: ['descending', 'year', [{},{},{}]]];
  tuple[1] is used to access the object property in the array like this:
  assume you're getting the year property from the first object in the array:

  let myTuple = ['descending', 'year', [{},{}]];
  let property = myTuple[1];       -> 'year'
  myTuple[2][0][property] = .....          -> should give you the year property of the first object
*/
