import { TestBed } from '@angular/core/testing';
import { SortService, Record } from './sort.service';
import { IMeteorite } from '../models/meteorite.model';

describe('SortService', () => {

  let service: SortService;
  let myArray: Record<string, string>[] = [
    { prop: '1' },
    { prop: '2' },
    { prop: '4' },
    { prop: '8' },
    { prop: '9' },
  ];
  let myStringArray: Record<string, string>[] = [
    { prop: 'a' },
    { prop: 'e' },
    { prop: 'r' },
    { prop: 'z' },
    { prop: 'b' },
  ];
  let meteoriteArray:IMeteorite[] = [
    {
      name: 'Aachen',
      id: '1',
      nametype: 'Valid',
      recclass: 'L5',
      mass: '21',
      fall: 'Fell',
      year: '1880-01-01T00:00:00.000',
      reclat: '50.775000',
      reclong: '6.083330',
      geolocation: { latitude: '50.775', longitude: '6.08333' },
    },
  ]
  let finalArray:Record<string, string>[];
  let key: string = 'prop';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort by object property of numbers descending', () => {
    expect(service.sortPropDesc(myArray, key)).toEqual([
      { prop: '9' },
      { prop: '8' },
      { prop: '4' },
      { prop: '2' },
      { prop: '1' },
    ]);
  });
  it('should sort by object property of numbers ascending', () => {
    expect(service.sortPropAsc(myArray, key)).toEqual([
      { prop: '1' },
      { prop: '2' },
      { prop: '4' },
      { prop: '8' },
      { prop: '9' },
    ]);
  });
  it('should sort by object property of strings descending', () => {
    expect(service.sortStringPropsDesc(myStringArray, key)).toEqual([
      { prop: 'z' },
      { prop: 'r' },
      { prop: 'e' },
      { prop: 'b' },
      { prop: 'a' },
    ]);
  });
  it('should sort by object property of strings descending', () => {
    expect(service.sortStringPropsAsc(myStringArray, key)).toEqual([
      { prop: 'a' },
      { prop: 'b' },
      { prop: 'e' },
      { prop: 'r' },
      { prop: 'z' },
    ]);
  });
  it('should have the type of object', () => {
    finalArray = service.sortStringPropsDesc(myStringArray, key);
    const checkType = typeof(finalArray[0]);

    expect(checkType).toEqual('object');
  });
});
