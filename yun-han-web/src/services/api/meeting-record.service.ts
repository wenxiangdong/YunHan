import { Inject, Injectable } from '@angular/core';
import { LoggerService } from '../utils/logger.service';
import { isTestMode } from './http-config';
import { IMeetingRecordService } from '../../types/i-meeting-record-service';
import { MeetingRecord } from '../../types/meeting-record';
import { Observable } from 'rxjs';
import { HttpResponse } from '../../types/http-response';
import { MockMeetingRecordService } from './mock/mock-meeting-record.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingRecordService implements IMeetingRecordService {

  constructor(
    private logger: LoggerService,
    private mock: MockMeetingRecordService
  ) {}

  addRecord(newRecord: MeetingRecord): Promise<HttpResponse<MeetingRecord[]>> {
    if (isTestMode) {
      return this.mock.addRecord(newRecord);
    }
    return undefined;
  }

  getRecordsByRange(range: Date[]): Promise<HttpResponse<MeetingRecord[]>> {
    if (isTestMode) {
      return this.mock.getRecordsByRange(range);
    }
    return undefined;
  }
}
