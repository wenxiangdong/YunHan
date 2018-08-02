import { Component, OnInit } from '@angular/core';
import { GLOBAL_TITLE, store } from '../../store/global';
import { MeetingRecord } from '../../types/meeting-record';
import { MeetingRecordService } from '../../services/api/meeting-record.service';
import { ResultMessage } from '../../types/result-message';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-meeting-record-page',
  templateUrl: './meeting-record-page.component.html',
  styleUrls: ['./meeting-record-page.component.css']
})
export class MeetingRecordPageComponent implements OnInit {

  // data
  meetingRecords: MeetingRecord[] = [];
  selectedRecord: MeetingRecord;
  dateRange: Date[] = [];
  loading = false;

  constructor(
    private meetingService: MeetingRecordService,
    private messageService: NzMessageService
  ) { }

  getRecords() {
    this.loading = true;
    this.meetingService.getRecordsByRange(this.dateRange)
      .subscribe(res => {
        if (res.result === ResultMessage.SUCCESS) {
          this.meetingRecords = res.data;
        }
        this.loading = false;
      });
  }

  ngOnInit() {
    store.setStore(GLOBAL_TITLE, '会议记录');
  }

  // 搜索会议记录
  onSearch() {
    if (!this.dateRange || !this.dateRange.length) {
      this.messageService.error('请选择日期区间');
      return;
    }
    this.getRecords();
  }
  // 新建会议记录
  onNewRecord() {

  }

  onRecordClose() {
    this.selectedRecord = undefined;
  }

  onSelectRecord(item: MeetingRecord) {
    this.selectedRecord = item;
  }
}
