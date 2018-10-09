import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherInfoCardMiniComponent } from './teacher-info-card-mini.component';

describe('TeacherInfoCardMiniComponent', () => {
  let component: TeacherInfoCardMiniComponent;
  let fixture: ComponentFixture<TeacherInfoCardMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherInfoCardMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherInfoCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
