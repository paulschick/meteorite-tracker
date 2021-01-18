import { INasaEndpointConstructor } from '../models/nasa-endpoint-constructor';
import { NASA_API_KEY } from '../configs/nasa-config';

export const NasaEndpointObject: INasaEndpointConstructor = {
  baseUrl: `https://api.nasa.gov`,
  queries: {
    start_date: '&start_date=',
    api_key: `?api_key=${NASA_API_KEY}`,
    image_count: '&count=',
    meteorites: 'http://data.nasa.gov/resource/gh4g-9sfh.json',
    astronomy_pics: '/planetary/apod',
  },
};
