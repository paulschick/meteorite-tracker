import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AstronomyPicDetailComponent } from './astronomy-pic-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AstronomyPicsDetailComponent', () => {
  let fixture: ComponentFixture<AstronomyPicDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstronomyPicDetailComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(AstronomyPicDetailComponent);
  });

  it('should have the correct title', () => {
    fixture.componentInstance.astroDetailImage = {
      copyright: 'Paul Schick',
      date: '1/5/2021',
      explanation: 'test',
      title: 'you have passed the test'
    };
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.detail--heading').textContent).toContain('you have passed the test');
  })
})
