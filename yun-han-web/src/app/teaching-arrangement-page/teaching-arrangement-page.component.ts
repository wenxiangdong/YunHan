import { Component, OnInit } from '@angular/core';
import { GLOBAL_TITLE, store } from '../../store/global';
import { LoggerService } from '../../services/utils/logger.service';
import { StudentRequest } from '../../types/student-request';
import { TeachingArrangementService } from '../../services/api/teaching-arrangement.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-teaching-arrangement-page',
  templateUrl: './teaching-arrangement-page.component.html',
  styleUrls: ['./teaching-arrangement-page.component.css']
})
export class TeachingArrangementPageComponent implements OnInit {

  private TAG = 'TeachingArrangementPageComponent';
  private OFFSET = 5;


  public MODE_ALL = 0;
  public MODE_ARRANGE = 1;
  public MODE_DETAIL = 2;
  public mode = this.MODE_ALL;

  public studentRequests: StudentRequest[] = [];
  public loadingRequests = false;
  public hasMoreRequests = true;

  public arrangedStudentRequests: StudentRequest[] = [];
  public loadingArrangedRequests = false;
  public hasMoreArrangedRequests = true;
  public selectedRequest: StudentRequest;

  constructor(
    private messageService: NzMessageService,
    private logger: LoggerService,
    private teachingService: TeachingArrangementService
  ) { }

  ngOnInit() {
    store.setStore(GLOBAL_TITLE, '教学安排');
    this.getStudentRequests();
  }

  onSelectTabWaiting() {
    this.logger.info(this.TAG, '待安排');
  }

  onSelectTabFinished() {
    this.logger.info(this.TAG, '已安排');
    if (!this.arrangedStudentRequests.length) {
      this.getArrangedRequests();
    }
  }

  onStartLoading() {
    if (this.loadingRequests || !this.hasMoreRequests) { return; }
    this.getStudentRequests();
  }

  onStartLoadingArranged() {
    if (this.loadingArrangedRequests || !this.hasMoreArrangedRequests) { return; }
    this.getArrangedRequests();
  }

  async getStudentRequests() {
    this.logger.info(this.TAG, 'start getting student requests');
    this.loadingRequests = true;
    try {
      const res = await this.teachingService.getStudentRequests(this.studentRequests.length, this.OFFSET);
      this.logger.info(this.TAG, 'got', res);
      res.forEach(item => {
        this.studentRequests.push(item);
      });
      if (!res.length) {
        this.hasMoreRequests = false;
      }
    } catch (e) {
      this.logger.error(this.TAG, e);
      this.messageService.error(e.message);
    } finally {
      this.loadingRequests = false;
    }
  }

  async getArrangedRequests() {
    this.logger.info(this.TAG, 'start getting student requests');
    this.loadingArrangedRequests = true;
    try {
      const res = await this.teachingService.getStudentRequests(this.studentRequests.length, this.OFFSET, true);
      this.logger.info(this.TAG, 'got', res);
      res.forEach(item => {
        this.arrangedStudentRequests.push(item);
      });
      if (!res.length) {
        this.hasMoreArrangedRequests = false;
      }
    } catch (e) {
      this.logger.error(this.TAG, e);
      this.messageService.error(e.message);
    } finally {
      this.loadingArrangedRequests = false;
    }
  }


  onArrangeRequest(request: StudentRequest) {
    this.mode = this.MODE_ARRANGE;
    this.selectedRequest = request;
  }

  onShowRequestDetail(request: StudentRequest) {
    this.mode = this.MODE_DETAIL;
    this.selectedRequest = request;
  }
}
