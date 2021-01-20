import { getYear, GetDateRange } from './date-methods';

describe('date-methods', () => {

  let getDateRange: GetDateRange;
  let dateString: string;

  beforeEach(() => {});

  it('should return the correct year', () => {
    dateString = '1880-01-01T00:00:00.000';
    expect(getYear(dateString)).toEqual(1880);
  });

  it('should return the correct start date', () => {
    getDateRange = new GetDateRange(12);
    expect(getDateRange.formattedDate).toEqual('2021-1-8');
  });
});
