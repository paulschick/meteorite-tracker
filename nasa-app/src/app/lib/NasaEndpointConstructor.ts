import { Optional } from '@angular/core';
import { NASA_API_KEY } from '../configs/nasa-config';
import { GetDateRange } from './GetDateRange';

// todo new stuff -> should replace all here
import { BaseQuery } from './BaseQuery';
import { NasaEndpointObject } from '../utils/NasaEndpointObject';


// Added to models
// TODO remove from here
export interface INasaQueryObject {
  start_date: string;
  api_key: string;
  image_count: string;
  meteorites: string;
  astronomy_pics: string;
}

// Added to models
// TODO remove from here
export interface INasaEndpointConstructor {
  baseUrl:string;
  queries:INasaQueryObject;
}

// Added to utils/NasaEndpointObject
// // TODO remove from here
// export const NasaEndpointObject:INasaEndpointConstructor = {
//   baseUrl: `https://api.nasa.gov`,
//   queries: {
//     start_date: '&start_date=',
//     api_key: `?api_key=${NASA_API_KEY}`,
//     image_count: '&count=',
//     meteorites: 'http://data.nasa.gov/resource/gh4g-9sfh.json',
//     astronomy_pics: '/planetary/apod'
//   }
// }

export class ExampleCreateQueries {
  private getDateRange:GetDateRange;
  private startDateQuery:string;
  private countQuery:number;

  startQueryObj:object;
  countQueryObj:object;

  constructor() {
    this.getDateRange = new GetDateRange(12);
    this.startDateQuery = this.getDateRange.formattedDate;
    this.countQuery = 1;

    // todo startQueryObj is passed into NasaEndpointConstructor
    // What if NasaEndpointConstructor just extends this??
    this.startQueryObj = {
      start_date: true,
      start_date_value: this.startDateQuery,
      image_count: false,
      image_count_value: null,
      meteorites: false
    }


  }
}


export class NasaEndpointConstructor extends BaseQuery {

  private _queryParams:any;
  endpoint:string;

  private _newQueryParams:any;
  _newEndpoint:string;

  // TODO: create interface for queryParams
  constructor(private endpointCategory:string, @Optional() private queryParams:any,

            protected _isMeteorite:boolean=false,
            protected _isRangeOfDays:boolean=false,
            protected _isRandomImage:boolean=false,
            protected _days:number|null=null,
            protected _count:number|null=null) {


    super(_isMeteorite, _isRangeOfDays, _isRandomImage, _days, _count);

    // from base class, constructed with protected dependencies
    this._newQueryParams = this.queryDecisionsObject;
    switch(true) {
      case this._newQueryParams.start_date === true: {
        this._newEndpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key + NasaEndpointObject.queries.start_date + this._newQueryParams.start_date_value;
      }
      break;
      case this._newQueryParams.image_count === true: {
        this._newEndpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key + NasaEndpointObject.queries.image_count + this._newQueryParams.image_count_value;
      }
      break;
      case this._newQueryParams.meteorites === true: {
        this._newEndpoint = NasaEndpointObject.queries.meteorites;
      }
      break;
      default:
        this._newEndpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key;
    }


    // TODO: refactor to switch statement
    this._queryParams = queryParams;
    if (endpointCategory === 'astronomy-pics' && this._queryParams.start_date === true) {
      this.endpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key + NasaEndpointObject.queries.start_date + this._queryParams.start_date_value;
    } else if (endpointCategory === 'astronomy-pics' && this._queryParams.image_count === true) {
      this.endpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key + NasaEndpointObject.queries.image_count + this._queryParams.image_count_value;
    } else if (endpointCategory === 'meteorites' && this._queryParams.meteorites === true) {
      this.endpoint = NasaEndpointObject.queries.meteorites;
    } else {
      this.endpoint = NasaEndpointObject.baseUrl;
    }

  }
}

/*
What's great about something like this is the ability to introduce dynamic numbers of images.
Could have a function in the component that allows the number of images to be set.
Yes there are other ways to implement, but, there could be an option to see any of the (currently) 3 options on one page with the press of a button.
You could type in 20 to see images from the last 20 days.
So having the url constructor and date range constructor like this, it's easy to introduce new things.

The only issue is the NasaEndpointConstructor is still pretty coupled to the different implementations.
But, query options are unique to the way someone builds an API, so at a certain point it has to be tightly linked to that impmlementation.
*/
