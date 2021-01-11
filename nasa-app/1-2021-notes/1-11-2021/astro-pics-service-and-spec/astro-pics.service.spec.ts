import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { IApd } from '../models/apd.model';
import { AstroPicsService } from './astro-pics.service';

describe('AstroPicsService', () => {
  let service: AstroPicsService;
  let httpMock: HttpTestingController;
  let dateRangeResponse: IApd[];
  let singleImageResponse: IApd;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AstroPicsService],
    }).compileComponents();
    service = TestBed.inject(AstroPicsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should retrieve ten objects from the API via the date range GET request', () => {
    dateRangeResponse = [
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

    service.getFromDateRange().subscribe(
      (data:IApd[]) => {
        expect(data.length).toBe(10);
        expect(data).toEqual(dateRangeResponse);
      }
    );
    const request = httpMock.expectOne(`${service.dateRangeUrl}`);
    expect(request.request.method).toBe('GET');
    request.flush(dateRangeResponse);
  });

  it('should retrieve a single object from the date passed in as an argument', () => {
    singleImageResponse = {
      copyright: 'Paul Schick',
      date: '2020-01-05',
      explanation: 'test',
      title: 'Test Image 01',
      url: 'https://example1.com',
    }

    const dateString = '2020-01-05';

    service.getDetailImage(dateString).subscribe(
      (data: IApd) => {
        expect(data.date).toBe(dateString);
        expect(data).toEqual(singleImageResponse);
      }
    );
    const request = httpMock.expectOne(`${service.singleImageUrl}${dateString}`);
    expect(request.request.method).toBe('GET');
    request.flush(singleImageResponse);
  });

  // this stays at the end
  afterEach(() => {
    httpMock.verify();
  });
});
