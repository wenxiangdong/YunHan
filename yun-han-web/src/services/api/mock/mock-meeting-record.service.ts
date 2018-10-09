import { Injectable } from '@angular/core';
import { MockHttpService } from './mock-http.service';
import { IMeetingRecordService } from '../../../types/interfaces/i-meeting-record-service';
import { MeetingRecord } from '../../../types/meeting-record';
import { LoggerService } from '../../utils/logger.service';
import { HttpResponse } from '../../../types/http-response';

@Injectable({
  providedIn: 'root'
})
export class MockMeetingRecordService implements IMeetingRecordService {

  private TAG = 'MockMeetingRecordService';

  constructor(
    private http: MockHttpService,
    private logger: LoggerService
  ) { }

  addRecord(newRecord: MeetingRecord): Promise<MeetingRecord[]> {
    return undefined;
  }

  getRecordsByRange(range: Date[]): Promise<MeetingRecord[]> {
    this.logger.info(this.TAG, 'getRecordsByRange', `range: ${range}`);
    let res: MeetingRecord[] = [];
    for (let i = 0; i < 6; i++) {
      let rec = new MeetingRecord(
        '标题标题标题标题标题标题' + i,
        new Date(),
        '内容内容内容内容内容内容',
        '李' + i
      );
      res.push(rec);
    }
    return this.http.go(res);
  }
}
