import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../services/api/base-http.service';
import mapboxgl from 'mapbox-gl';
import { CENTER, MAPBOX_TOKEN } from '../../constants/mapbox';
import { StudentRequest } from '../../../types/student-request';
import { Location } from '../../../types/location';
import { Course } from '../../../types/enums/course.enum';
import { Teacher } from '../../../types/teacher';
import { Contact } from '../../../types/contact';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  options = [];
  studentRequest: StudentRequest;
  teacher: Teacher = new Teacher();

  constructor(
    private http: BaseHttpService
  ) { }

  ngOnInit() {
    this.initRequest();
    console.log(this.teacher, new Contact());
  }

  initRequest() {

  }

}
