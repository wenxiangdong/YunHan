import { TestBed, inject } from '@angular/core/testing';

import { MockTeachingArrangementService } from './mock-teaching-arrangement.service';

describe('MockTeachingArrangementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockTeachingArrangementService]
    });
  });

  it('should be created', inject([MockTeachingArrangementService], (service: MockTeachingArrangementService) => {
    expect(service).toBeTruthy();
  }));
});
