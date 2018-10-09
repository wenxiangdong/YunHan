import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MeetingRecord } from '../../types/meeting-record';
import { LoggerService } from '../../services/utils/logger.service';
import { NzModalService } from 'ng-zorro-antd';
import { COPY_RECORD, store } from '../../store/global';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-record',
  templateUrl: './meeting-record.component.html',
  styleUrls: ['./meeting-record.component.css']
})
export class MeetingRecordComponent implements OnInit {
  @Input()
  public meetingRecord: MeetingRecord;

  @Output()
  close = new EventEmitter();

  private TAG = 'MeetingRecordComponent';

  constructor(
    private logger: LoggerService,
    private modalService: NzModalService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickCopy() {
    this.modalService.confirm({
      nzTitle: `即将拷贝到一个新的会议记录`,
      nzContent: `该功能是“修改记录”的替代功能，我们会拷贝当前记录并在新的记录上提供修改`,
      nzOnOk: () => {
        this.logger.info(this.TAG, '拷贝');
        store.setStore(COPY_RECORD, this.meetingRecord);
        this.router.navigateByUrl('/meeting-record-new');
      }
    });
  }

  onBack() {
    this.close.emit();
  }
}
