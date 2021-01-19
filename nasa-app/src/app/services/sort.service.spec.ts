import { TestBed } from '@angular/core/testing';

import { SortService, ITempInterface } from './sort.service';

describe('SortService', () => {
  let service: SortService;
  let myArray:ITempInterface[] = [
    { prop:'1' },
    { prop:'2' },
    { prop:'4' },
    { prop:'8' },
    { prop:'9' },
  ];
  let myStringArray:ITempInterface[] = [
    { prop:'a' },
    { prop:'e' },
    { prop:'r' },
    { prop:'z' },
    { prop:'b' },
  ];
  let prop:string = 'prop';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort by object property of numbers descending', () => {
    expect(service.sortPropDesc(myArray,prop)).toEqual(
      [
        { prop:'9' },
        { prop:'8' },
        { prop:'4' },
        { prop:'2' },
        { prop:'1' },
      ]
    )
  })
  it('should sort by object property of numbers ascending', () => {
    expect(service.sortPropAsc(myArray,prop)).toEqual(
      [
        { prop:'1' },
        { prop:'2' },
        { prop:'4' },
        { prop:'8' },
        { prop:'9' },
      ]
    )
  })
  it('should sort by object property of strings descending', () => {
    expect(service.sortStringPropsDesc(myStringArray,prop)).toEqual(
      [
        { prop:'z' },
        { prop:'r' },
        { prop:'e' },
        { prop:'b' },
        { prop:'a' },
      ]
    )
  })
  it('should sort by object property of strings descending', () => {
    expect(service.sortStringPropsAsc(myStringArray,prop)).toEqual(
      [
        { prop:'a' },
        { prop:'b' },
        { prop:'e' },
        { prop:'r' },
        { prop:'z' },
      ]
    )
  })
});
