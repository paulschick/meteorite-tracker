import { TestBed } from '@angular/core/testing';

/*
TODO: Replace ITempInterface with robust interface
todo  Test with object constructor -> sorting func should determine which to execute based on obj properties.
*/
import { SortService } from './sort.service';
import { IMeteorite } from '../models/meteorite.model';

describe('SortService', () => {
  let service: SortService;
  let myArray: object[]|IMeteorite[] = [
    { prop: '1' },
    { prop: '2' },
    { prop: '4' },
    { prop: '8' },
    { prop: '9' },
  ];
  let myStringArray: object[]|IMeteorite[] = [
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
  let prop: string = 'prop';
  let name: string = 'name';
  let finalArray:object[]|IMeteorite[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort by object property of numbers descending', () => {
    expect(service.sortPropDesc(myArray, prop)).toEqual([
      { prop: '9' },
      { prop: '8' },
      { prop: '4' },
      { prop: '2' },
      { prop: '1' },
    ]);
  });
  it('should sort by object property of numbers ascending', () => {
    expect(service.sortPropAsc(myArray, prop)).toEqual([
      { prop: '1' },
      { prop: '2' },
      { prop: '4' },
      { prop: '8' },
      { prop: '9' },
    ]);
  });
  it('should sort by object property of strings descending', () => {
    expect(service.sortStringPropsDesc(myStringArray, prop)).toEqual([
      { prop: 'z' },
      { prop: 'r' },
      { prop: 'e' },
      { prop: 'b' },
      { prop: 'a' },
    ]);
  });
  it('should sort by object property of strings descending', () => {
    expect(service.sortStringPropsAsc(myStringArray, prop)).toEqual([
      { prop: 'a' },
      { prop: 'b' },
      { prop: 'e' },
      { prop: 'r' },
      { prop: 'z' },
    ]);
  });
  it('should have the type of object', () => {
    finalArray = service.sortStringPropsDesc(myStringArray, prop);
    const checkType = typeof(finalArray[0]);

    expect(checkType).toEqual('object');
  });
});
