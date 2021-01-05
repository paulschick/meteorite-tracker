import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { RandomImageService } from './random-image.service';
import { IApd } from '../models/apd.model';
import { NasaError } from '../models/nasaErrors.model';

describe('RandomImageService', () => {
  let service: RandomImageService;
  let httpMock: HttpTestingController;
  let response: IApd[];
  let err: NasaError;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RandomImageService],
    }).compileComponents();
    service = TestBed.inject(RandomImageService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve image objects from the API via GET', () => {
    response = [
      {
        copyright: 'Paul Schick',
        date: '2020-01-05',
        explanation: 'test',
        title: 'Test Image 01',
        url: 'https://example1.com',
      },
      {
        copyright: 'Paul Schick',
        date: '2020-01-01',
        explanation: 'test',
        title: 'Test Image 02',
        url: 'https://example2.com',
      },
    ];

    const imageNumber: number = 2;

    service.getRandomImages(imageNumber).subscribe(
      (data: IApd[]) => {
        expect(data.length).toBe(2);
        expect(data).toEqual(response);
      },
      (error: NasaError) => err
    );
    const request = httpMock.expectOne(`${service.fullEndpoint}${imageNumber}`);
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
