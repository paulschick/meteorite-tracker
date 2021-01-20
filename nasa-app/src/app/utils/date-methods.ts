/*
TODO: Create single date manipulation util
? Isolates the year from a date string
*/
export const getYear = (dateString:string):number => {
  const date = new Date(dateString);
  return date.getFullYear();
}

export class GetDateRange {
  private _daysAgo: number;
  private _daysPriorTimestamp: Date;
  year: number;
  month: number;
  day: number;
  formattedDate: string;

  constructor(public daysAgo: number) {
    this._daysAgo = daysAgo - 1;
    this._daysPriorTimestamp = new Date(
      Date.now() - this._daysAgo * 24 * 60 * 60 * 1000
    );

    // accessible to class instance
    // ---------------------------------------------------------
    this.year = this._daysPriorTimestamp.getFullYear();
    this.month = this._daysPriorTimestamp.getMonth() + 1;
    this.day = this._daysPriorTimestamp.getDate();
    this.formattedDate = `${this.year}-${this.month}-${this.day}`;
  }
}
