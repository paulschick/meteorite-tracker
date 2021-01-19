import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColumnObserverComponent } from './grid-column-observer.component';

describe('GridColumnObserverComponent', () => {
  let component: GridColumnObserverComponent;
  let fixture: ComponentFixture<GridColumnObserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridColumnObserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridColumnObserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
