import { NASA_API_KEY } from '../configs/nasa-config';
import { ENDPOINT } from './nasa-endpoints';

describe('nasa-endpoints', () => {

  let _endpoint: ENDPOINT;
  let key: string;

  beforeEach(() => {
    key = NASA_API_KEY;
  });

  it('url should include the correct date and API key', () => {
    _endpoint = new ENDPOINT();
    expect(_endpoint.DATE_RANGE).toContain(key);
  });
});
