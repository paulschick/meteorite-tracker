import { NASA_API_KEY } from '../configs/nasa-config';

export class AstronomyPicsEndpoint {

  private key: string;
  private twelveDaysPrior: Date;
  private formattedDate: string;
  protected dateRangeUrl: string;

  constructor() {
    this.key = NASA_API_KEY;
    this.twelveDaysPrior = new Date(Date.now() - 11 * 24 * 60 * 60 * 1000);
    this.formattedDate = `${this.twelveDaysPrior.getFullYear()}-${
      this.twelveDaysPrior.getMonth() + 1
    }-${this.twelveDaysPrior.getDate()}`;
    this.dateRangeUrl = `https://api.nasa.gov/planetary/apod?api_key=${this.key}&start_date=${this.formattedDate}`;
  }
}

/*
TODO: How can I make this dynamic? Support meteorites, astro-pics, random image
BUT, it should not just all be hard-coded.
For example, if I want a date range, I should be able to pass in the number of days ago, and it can return that date.
This is a separate class too.
*/
