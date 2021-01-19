import { TestBed } from '@angular/core/testing';

import { GridColumnObserverService } from './grid-column-observer.service';

describe('GridColumnObserverService', () => {
  let service: GridColumnObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridColumnObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
