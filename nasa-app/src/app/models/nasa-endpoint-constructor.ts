import { INasaQueryObject } from './nasa-query-object';

export interface INasaEndpointConstructor {
  baseUrl:string;
  queries:INasaQueryObject;
}
