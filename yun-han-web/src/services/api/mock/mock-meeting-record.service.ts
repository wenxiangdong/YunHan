import { Injectable } from '@angular/core';
import { MockHttpService } from './mock-http.service';
import { IMeetingRecordService } from '../../../types/i-meeting-record-service';
import { MeetingRecord } from '../../../types/meeting-record';
import { Observable } from 'rxjs';
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

  addRecord(newRecord: MeetingRecord): Observable<HttpResponse<MeetingRecord[]>> {
    return undefined;
  }

  getRecordsByRange(range: Date[]): Observable<HttpResponse<MeetingRecord[]>> {
    this.logger.info(this.TAG, 'getRecordsByRange', `range: ${range}`);
    let res: MeetingRecord[] = [];
    for (let i = 0; i < 6; i++) {
      let rec = new MeetingRecord(
        '标题标题标题标题标题标题' + i,
        new Date(),
        [
          '内容', '内容', '内容'
        ],
        '李' + i
      );
      res.push(rec);
    }
    return this.http.http(res);
  }
}
