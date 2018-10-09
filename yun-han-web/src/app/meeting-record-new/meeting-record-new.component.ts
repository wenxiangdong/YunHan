import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MeetingRecord } from '../../types/meeting-record';
import { LoggerService } from '../../services/utils/logger.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Location } from '@angular/common';
import { COPY_RECORD, store } from '../../store/global';

@Component({
  selector: 'app-meeting-record-new',
  templateUrl: './app-meeting-record-new.html',
  styleUrls: ['./app-meeting-record-new.css']
})
export class MeetingRecordNewComponent implements OnInit {
  private TAG = 'MeetingRecordNewComponent';

  // data
  meetingRecord: MeetingRecord;

  @Output()
  cancel = new EventEmitter();

  constructor(
    private logger: LoggerService,
    private messageService: NzMessageService,
    private modalService: NzModalService,
    private location: Location
  ) {
    let temp = store.getStore(COPY_RECORD, null);
    this.logger.info(this.TAG, 'get store', temp);
    if (!temp) {
      this.meetingRecord = new MeetingRecord(
        '',
        new Date(),
        '',
        ''
      );
    } else {
      this.meetingRecord = temp;
      // 修改时间为当前时间
      this.meetingRecord.time = new Date();
      store.removeStore(COPY_RECORD);
    }
  }

  ngOnInit() {
  }
  // 提交
  onSubmit() {
    // TODO：非空检验
    for (let key in this.meetingRecord) {
      if (!this.meetingRecord[key]) {
        this.messageService.error('请确保各项填写完整');
        return;
      }
    }
    this.logger.info(this.TAG, 'on submit');
  }
  // 放弃内容
  onCancel() {
    this.modalService.confirm({
      nzTitle: '将舍弃所有更改',
      nzOnOk: () => {
        this.cancel.emit();
        this.location.back();
      }
    });
  }
}
