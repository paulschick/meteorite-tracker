import { GetDateRange } from '../lib/GetDateRange';
import { NASA_API_KEY } from '../configs/nasa-config';

export class ENDPOINT {

  private getDateRange:GetDateRange;
  key:string;
  startDate:string;
  public DATE_RANGE:string;
  public RANDOM_IMAGE:string;
  public METEORITES:string;

  constructor() {
    this.getDateRange = new GetDateRange(12);
    this.startDate = this.getDateRange.formattedDate;
    this.key = NASA_API_KEY;
    this.DATE_RANGE = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.startDate}`;
    this.RANDOM_IMAGE = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1`;
    this.METEORITES = 'https://data.nasa.gov/resource/gh4g-9sfh.json';
  }
}
