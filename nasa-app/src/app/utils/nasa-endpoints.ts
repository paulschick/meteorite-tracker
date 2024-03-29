import { GetDateRange } from '../utils/date-methods';
import { NASA_API_KEY } from '../configs/nasa-config';

export class ENDPOINT extends GetDateRange {

  key:string;
  public DATE_RANGE:string;
  public RANDOM_IMAGE:string;
  public METEORITES:string;

  constructor(_days:number=12) {

    super(_days);
    this.key = NASA_API_KEY;

    this.DATE_RANGE = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.formattedDate}`;
    this.RANDOM_IMAGE = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1`;
    this.METEORITES = 'https://data.nasa.gov/resource/gh4g-9sfh.json';
  }
}
