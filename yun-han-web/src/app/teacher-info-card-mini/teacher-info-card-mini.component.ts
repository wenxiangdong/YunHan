import { Component, Input, OnInit} from '@angular/core';
import { Teacher } from '../../types/teacher';

@Component({
  selector: 'app-teacher-info-card-mini',
  templateUrl: './teacher-info-card-mini.component.html',
  styleUrls: ['./teacher-info-card-mini.component.css']
})
export class TeacherInfoCardMiniComponent implements OnInit {

  @Input()
  teacher: Teacher;

  @Input()
  detailMode = false;

  constructor() { }

  ngOnInit() {
  }

  onShowDetail() {
    this.detailMode = true;
  }
}
