import { Component, OnInit } from '@angular/core';
import { MeetingRecord } from '../../../types/meeting-record';
import { BaseHttpService } from '../../../services/api/base-http.service';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  options = [];
  record: MeetingRecord;

  constructor(
    private http: BaseHttpService
  ) { }

  ngOnInit() {
    this.options = ['a', 'b', 'c'];
    this.record = new MeetingRecord(
      '标题',
      new Date(),
      [
        '哈哈哈哈哈哈品保侃侃侃侃你叫啥哈哈哈哈哈哈哈哈',
        '哈哈哈哈哈哈品保侃侃侃侃你叫啥哈哈哈哈哈哈哈哈',
        '哈哈哈哈哈哈品保侃侃侃侃你叫啥哈哈哈哈哈哈哈哈',
        '哈哈哈哈哈哈品保侃侃侃侃你叫啥哈哈哈哈哈哈哈哈',
        '哈哈哈哈哈哈品保侃侃侃侃你叫啥哈哈哈哈哈哈哈哈',
        '哈哈哈哈哈哈品保侃侃侃侃你叫啥哈哈哈哈哈哈哈哈'
      ],
      '李培林'
    );
  }

}
