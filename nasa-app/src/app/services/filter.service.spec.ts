import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';
import { IMeteorite } from '../models/meteorite.model';

describe('FilterService', () => {
  let service: FilterService;
  let myMeteorite: IMeteorite[] = [
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
  ];
  let notMeteorite: object[] = [
    {
      name: 'Not a meteorite',
      id: '1',
      mass: '100',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true', () => {
    expect(service.isIMeteorite(myMeteorite)).toEqual(true);
  });

  it('should return false', () => {
    expect(service.isIMeteorite(notMeteorite)).toEqual(false);
  });
});
