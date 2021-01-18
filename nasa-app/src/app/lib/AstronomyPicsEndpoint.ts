import { NASA_API_KEY } from '../configs/nasa-config';

export class AstronomyPicsEndpoint {

  private key: string;
  private twelveDaysPrior: Date;
  private formattedDate: string;
  dateRangeUrl: string;
  randomImageUrl: string;
  meteoritesUrl: string;

  constructor() {
    this.key = NASA_API_KEY;
    this.twelveDaysPrior = new Date(Date.now() - 11 * 24 * 60 * 60 * 1000);
    this.formattedDate = `${this.twelveDaysPrior.getFullYear()}-${
      this.twelveDaysPrior.getMonth() + 1
    }-${this.twelveDaysPrior.getDate()}`;
    this.dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.formattedDate}`;
    this.randomImageUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&count=1`;
    this.meteoritesUrl = 'https://data.nasa.gov/resource/gh4g-9sfh.json'

  }
}


// just do a class that gets the date range, and then export each url as a var.
