import { MeetingRecord } from './meeting-record';
import { Observable } from 'rxjs';
import { HttpResponse } from './http-response';

export interface IMeetingRecordService {
  getRecordsByRange(range: Date[]): Observable<HttpResponse<MeetingRecord[]>>;
  addRecord(newRecord: MeetingRecord): Observable<HttpResponse<MeetingRecord[]>>;
}
