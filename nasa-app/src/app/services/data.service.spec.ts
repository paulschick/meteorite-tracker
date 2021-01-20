import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { DataService } from './data.service';
import { IApd } from '../models/apd.model';
import { NasaError } from '../models/nasaErrors.model';
import { ENDPOINT } from '../utils/nasa-endpoints';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  let response: IApd[];
  let err: NasaError;
  let _endpoint: ENDPOINT;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    }).compileComponents();
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
    _endpoint = new ENDPOINT();
    url = _endpoint.RANDOM_IMAGE;
  });

  it('should retrieve objects from the url with a GET request', () => {
    response = [
      {
        copyright: 'Paul Schick',
        date: '2020-01-05',
        explanation: 'test',
        title: 'Test Image 01',
        url: 'https://example1.com',
      }
    ];

    service.getRequest(url,false)
      .subscribe(
        (data: IApd[]) => {
          expect(data.length).toBe(1);
          expect(data).toEqual(response);
        }
      );
    const request = httpMock.expectOne(url);
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });

  it('should make a GET request to the correct url', () => {

  });

  it('should add skip headers if shouldSkip is true', () => {

  });

  afterEach(() => {
    httpMock.verify();
  });
});
