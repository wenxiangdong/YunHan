import { TestBed, inject } from '@angular/core/testing';

import { MeetingRecordService } from './meeting-record.service';

describe('MeetingRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetingRecordService]
    });
  });

  it('should be created', inject([MeetingRecordService], (service: MeetingRecordService) => {
    expect(service).toBeTruthy();
  }));
});
