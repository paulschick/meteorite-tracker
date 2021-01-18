// import { NasaEndpointObject } from '../utils/NasaEndpointObject';
import { GetDateRange } from './GetDateRange';

export interface IQueryDecisionsObject {
  start_date: boolean;
  start_date_value: string | null;
  image_count: boolean;
  image_count_value: number | null;
  meteorites: boolean;
}

/*
    TODO what does this accept? number of days for getdaterange if true
    todo||| or it needs the number of random images if that true
    todo|||| optional stuff then -> if optional need defaults
*/
export class BaseQuery {
  // base-only properties
  // private _queryDecisionsObject: IQueryDecisionsObject;
  private _getDateRange: GetDateRange | null;
  private _formattedDateString: string | null;
  private _countQuery: number | null;
  // inheritable properties
  protected queryDecisionsObject: IQueryDecisionsObject;

  constructor(
    private isMeteorite: boolean,
    private isRangeOfDays: boolean,
    private isRandomImage: boolean,
    private days: number | null,
    private count: number | null
  ) {
    // starts off with sending all NOs
    this.queryDecisionsObject = {
      start_date: false,
      start_date_value: null,
      image_count: false,
      image_count_value: null,
      meteorites: false,
    };

    switch (true) {
      case isMeteorite === false && isRangeOfDays === true: {
        this.queryDecisionsObject.start_date = true;
        if (typeof(days) === null) {
          this.getDateString(12);
          this.queryDecisionsObject.start_date_value = this._formattedDateString;
        } else {
          this.getDateString(days);
          this.queryDecisionsObject.start_date_value = this._formattedDateString;
        }
      }
      break;
      case isMeteorite === false && isRangeOfDays === false && isRandomImage === true: {
        this.queryDecisionsObject.image_count = true;
        if (typeof(count) === null) {
          this.queryDecisionsObject.image_count_value = 1;
        } else {
          this.queryDecisionsObject.image_count_value = count;
        }
      }
      break;
      default: {
        this.queryDecisionsObject.meteorites = true;
      }
    }
  }

  getDateString(days: number) {
    this._getDateRange = new GetDateRange(days);
    this._formattedDateString = this._getDateRange.formattedDate;
  }
}

// REPLACING STARTQUERYOBJ
// This is super to NasaEndpointConstructor
// it will inherit this.
// this takes in the params to choose which endpoint for a component to use

/*
TODO replace ExampleCreateQueries
Just move NasaEndpointObject to somewhere like utils
*/

/*

        todo LOG PROGRESS HERE
      - Created interface for obj used for child to make decisions
*/
