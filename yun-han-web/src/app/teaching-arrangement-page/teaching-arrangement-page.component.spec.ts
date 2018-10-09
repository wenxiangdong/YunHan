import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingArrangementPageComponent } from './teaching-arrangement-page.component';

describe('TeachingArrangementPageComponent', () => {
  let component: TeachingArrangementPageComponent;
  let fixture: ComponentFixture<TeachingArrangementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingArrangementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingArrangementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
