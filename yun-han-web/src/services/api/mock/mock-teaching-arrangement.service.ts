import { Injectable } from '@angular/core';
import { ITeachingArrangementService } from '../../../types/interfaces/i-teaching-arrangement-service';
import { StudentRequest } from '../../../types/student-request';
import { Course } from '../../../types/enums/course.enum';
import { Location } from '../../../types/location';
import { MockHttpService } from './mock-http.service';
import { Student } from '../../../types/student';
import { StudentType } from '../../../types/enums/student-type.enum';
import { Contact } from '../../../types/contact';
import { Teacher } from '../../../types/teacher';

export const MockStudent = function (i?) {
  return new StudentRequest(
    'id' + i,
    new Student('studentId', 'studentName', '男', StudentType.SCIENCE, 20, new Location('name', 'fullName', 0, 0), 'school', 'grade', new Contact(), 'introduction'),
    '备注备注备注',
    [Course.CHINESE, Course.ENGLISH],
    false
  );
};


@Injectable({
  providedIn: 'root'
})
export class MockTeachingArrangementService implements ITeachingArrangementService {

  constructor(
    private mockHttp: MockHttpService
  ) { }

  getStudentRequests(index, offset, arranged: boolean = false): Promise<StudentRequest[]> {
    const res: StudentRequest[] = [];
    for (let i = 0; i < offset; i++) {
      const studentRequest = MockStudent(i);
      studentRequest.isArranged = arranged;
      let teacher = new Teacher();
      studentRequest.teacherInfo = teacher;
      res.push(studentRequest);
    }
    return this.mockHttp.go(res);
  }
}
