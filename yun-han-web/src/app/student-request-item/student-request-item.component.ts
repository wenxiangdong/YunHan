import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentRequest } from '../../types/student-request';
import { LoggerService } from '../../services/utils/logger.service';

@Component({
  selector: 'app-student-request-item',
  templateUrl: './student-request-item.component.html',
  styleUrls: ['./student-request-item.component.css']
})
export class StudentRequestItemComponent implements OnInit {

  @Input()
  studentRequest: StudentRequest;

  @Input()
  detailMode = false;

  @Output()
  arrange: EventEmitter<void> = new EventEmitter();

  @Output()
  detail: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private logger: LoggerService
  ) { }

  ngOnInit() {
  }

  onClickArrange() {
    this.arrange.emit();
  }

  onClickDetail() {
    this.detail.emit();
  }
}
