import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingArrangingComponent } from './teaching-arranging.component';

describe('TeachingArrangingComponent', () => {
  let component: TeachingArrangingComponent;
  let fixture: ComponentFixture<TeachingArrangingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachingArrangingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingArrangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
