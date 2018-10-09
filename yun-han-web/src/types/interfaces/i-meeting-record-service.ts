import { MeetingRecord } from '../meeting-record';
import { HttpResponse } from '../http-response';

export interface IMeetingRecordService {
  getRecordsByRange(range: Date[]): Promise<MeetingRecord[]>;
  addRecord(newRecord: MeetingRecord): Promise<MeetingRecord[]>;
}
