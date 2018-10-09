import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRequestItemComponent } from './student-request-item.component';

describe('StudentRequestItemComponent', () => {
  let component: StudentRequestItemComponent;
  let fixture: ComponentFixture<StudentRequestItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRequestItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRequestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
