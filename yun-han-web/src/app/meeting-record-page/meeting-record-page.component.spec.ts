import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingRecordPageComponent } from './meeting-record-page.component';

describe('MeetingRecordPageComponent', () => {
  let component: MeetingRecordPageComponent;
  let fixture: ComponentFixture<MeetingRecordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingRecordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
