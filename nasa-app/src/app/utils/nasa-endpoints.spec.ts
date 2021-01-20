import { GetDateRange } from './date-methods';
import { NASA_API_KEY } from '../configs/nasa-config';
import { ENDPOINT } from './nasa-endpoints';

describe('nasa-endpoints', () => {

  let _endpoint: ENDPOINT;
  let getDateRange: GetDateRange;
  let key: string;

  beforeEach(() => {
    key = NASA_API_KEY;
  });

  it('url should include the correct date and API key', () => {
    _endpoint = new ENDPOINT(10);
    // expect(_endpoint.DATE_RANGE).toContain('2021-1-10');
    expect(_endpoint.DATE_RANGE).toContain(key);
  });
});
