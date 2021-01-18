import { NASA_API_KEY } from '../configs/nasa-config';
import { GetDateRange } from '../lib/GetDateRange';

export class AstronomyPicsEndpoint {

  private key: string;
  private getDateRange:GetDateRange;
  nasaEndpoint:string;

  constructor(startDay:number) {
    this.key = NASA_API_KEY;
    this.getDateRange = new GetDateRange(startDay);
    this.nasaEndpoint = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.getDateRange.formattedDate}`;

  }
}
