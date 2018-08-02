import { TestBed, inject } from '@angular/core/testing';

import { MockMeetingRecordService } from './mock-meeting-record.service';

describe('MockMeetingRecordService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockMeetingRecordService]
    });
  });

  it('should be created', inject([MockMeetingRecordService], (service: MockMeetingRecordService) => {
    expect(service).toBeTruthy();
  }));
});
