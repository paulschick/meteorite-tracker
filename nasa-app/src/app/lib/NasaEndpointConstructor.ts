import { Optional } from '@angular/core';
import { NASA_API_KEY } from '../configs/nasa-config';
import { GetDateRange } from './GetDateRange';

export interface INasaQueryObject {
  start_date: string;
  api_key: string;
  image_count: string;
  meteorites: string;
  astronomy_pics: string;
}

export interface INasaEnpointConstructor {
  baseUrl:string;
  queries:INasaQueryObject;
}

export const NasaEndpointObject:INasaEnpointConstructor = {
  baseUrl: `https://data.nasa.gov`,
  queries: {
    start_date: '&start_date=',
    api_key: `?api_key=${NASA_API_KEY}`,
    image_count: '&count=',
    meteorites: '/resource/gh4g-9sfh.json',
    astronomy_pics: '/planetary/apod'
  }
}

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

    this.startQueryObj = {
      start_date: true,
      start_date_value: this.startDateQuery,
      image_count: false,
      image_count_value: null,
      meteorites: false
    }


  }
}


export class NasaEndpointConstructor {

  private _queryParams:any;
  endpoint:string;

  // TODO: create interface for queryParams
  constructor(private endpointCategory:string, @Optional() private queryParams:any) {

    // TODO: refactor to switch statement
    this._queryParams = queryParams;
    if (this._queryParams.start_date === true) {
      this.endpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key + NasaEndpointObject.queries.start_date + this._queryParams.start_date_value;
    } else if (this._queryParams.image_count === true) {
      this.endpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.astronomy_pics + NasaEndpointObject.queries.api_key + NasaEndpointObject.queries.image_count + this._queryParams.image_count_value;
    } else if (this._queryParams.meteorites === true) {
      this.endpoint = NasaEndpointObject.baseUrl + NasaEndpointObject.queries.meteorites;
    } else {
      this.endpoint = NasaEndpointObject.baseUrl;
    }

  }
}

/*

        TODO: Guidelines for url construction:
        - if astronomy_pics === true, then it needs api key
        - if meteorites === true, then it just needs base + meteorites
        - if astronomy_pics && image_count === true, then base + astronomy_pics + key + image_count
        - if astronomy_pics && start_date === true, then base + astronomy_pics + key + start_date


        So minimum dependencies:

          - meteorites or astronomy_pics
          - optional object of values for the queries ->
                - if astronomy_pics, need to get optionally start_date or image_count
                      - default is today's single image
                      - key will be imported to this class here.

*/



/*
TODO: Dynamically produce endpoints for NASA api
- three are used
- if possible, allow for more to be added without large additions to the code

Daily Images full current url: https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.getDateRange.formattedDate}
Random image url: https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1
meteorites url: https://data.nasa.gov/resource/gh4g-9sfh.json
*/
