import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCardNewComponent } from './meeting-card-new.component';

describe('MeetingCardNewComponent', () => {
  let component: MeetingCardNewComponent;
  let fixture: ComponentFixture<MeetingCardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingCardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
