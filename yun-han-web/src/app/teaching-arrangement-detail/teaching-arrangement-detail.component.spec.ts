import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingArrangementDetailComponent } from './teaching-arrangement-detail.component';

describe('TeachingArrangementDetailComponent', () => {
  let component: TeachingArrangementDetailComponent;
  let fixture: ComponentFixture<TeachingArrangementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingArrangementDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingArrangementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
