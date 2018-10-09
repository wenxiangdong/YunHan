import { Inject, Injectable } from '@angular/core';
import { LoggerService } from '../utils/logger.service';
import { isTestMode } from '../../app/constants/http-config';
import { IMeetingRecordService } from '../../types/interfaces/i-meeting-record-service';
import { MeetingRecord } from '../../types/meeting-record';
import { MockMeetingRecordService } from './mock/mock-meeting-record.service';

@Injectable({
  providedIn: 'root'
})
export class MeetingRecordService implements IMeetingRecordService {

  constructor(
    private logger: LoggerService,
    private mock: MockMeetingRecordService
  ) {}

  addRecord(newRecord: MeetingRecord): Promise<MeetingRecord[]> {
    if (isTestMode) {
      return this.mock.addRecord(newRecord);
    }
    return undefined;
  }

  getRecordsByRange(range: Date[]): Promise<MeetingRecord[]> {
    if (isTestMode) {
      return this.mock.getRecordsByRange(range);
    }
    return undefined;
  }
}
