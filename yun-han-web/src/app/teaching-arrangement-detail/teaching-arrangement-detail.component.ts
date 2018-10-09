import { Component, Input, OnInit } from '@angular/core';
import { StudentRequest } from '../../types/student-request';

@Component({
  selector: 'app-teaching-arrangement-detail',
  templateUrl: './teaching-arrangement-detail.component.html',
  styleUrls: ['./teaching-arrangement-detail.component.css']
})
export class TeachingArrangementDetailComponent implements OnInit {

  @Input()
  studentRequest: StudentRequest;

  constructor() { }

  ngOnInit() {
  }

}
