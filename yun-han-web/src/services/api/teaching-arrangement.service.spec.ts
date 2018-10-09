import { TestBed, inject } from '@angular/core/testing';

import { TeachingArrangementService } from './teaching-arrangement.service';

describe('TeachingArrangementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeachingArrangementService]
    });
  });

  it('should be created', inject([TeachingArrangementService], (service: TeachingArrangementService) => {
    expect(service).toBeTruthy();
  }));
});
