import { Component, OnInit } from '@angular/core';
import { GLOBAL_TITLE, store } from '../../store/global';
import { MeetingRecord } from '../../types/meeting-record';
import { MeetingRecordService } from '../../services/api/meeting-record.service';
import { ResultMessage } from '../../types/enums/result-message';
import { NzMessageService } from 'ng-zorro-antd';
import { LoggerService } from '../../services/utils/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-record-page',
  templateUrl: './meeting-record-page.component.html',
  styleUrls: ['./meeting-record-page.component.css']
})
export class MeetingRecordPageComponent implements OnInit {
  private TAG = 'MeetingRecordPageComponent';

  // data
  meetingRecords: MeetingRecord[] = [];
  selectedRecord: MeetingRecord;
  dateRange: Date[] = [];
  loading = false;
  filter = '';

  get recordsToShow() {
    return this.meetingRecords.filter(
      item => item.title.indexOf(this.filter) > -1
    );
  }

  constructor(
    private logger: LoggerService,
    private meetingService: MeetingRecordService,
    private messageService: NzMessageService,
    private router: Router
  ) { }

  async getRecords() {
    this.loading = true;
    try {
      const res = await this.meetingService.getRecordsByRange(this.dateRange);
      this.meetingRecords = res;
    } catch (e) {
      this.logger.error(this.TAG, e.message);
      this.messageService.error(`获取失败 ${e.message}`);
    } finally {
      this.loading = false;
    }
  }

  ngOnInit() {
    store.setStore(GLOBAL_TITLE, '会议记录');
  }

  // 搜索会议记录
  async onSearch() {
    if (!this.dateRange || !this.dateRange.length) {
      this.messageService.error('请选择日期区间');
      return;
    }
    await this.getRecords();
  }
  // 新建会议记录
  onNewRecord() {
    this.router.navigateByUrl('/meeting-record-new');
  }

  onRecordClose() {
    this.selectedRecord = undefined;
  }

  onSelectRecord(item: MeetingRecord) {
    this.selectedRecord = item;
  }
}
