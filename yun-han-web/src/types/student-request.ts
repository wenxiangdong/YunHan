/**
 * 学员请求教学
 */
import { Course } from './enums/course.enum';
import { Location } from './location';
import { Student } from './student';
import { Teacher } from './teacher';

export class StudentRequest {
  public requestId: string | number;
  // public studentId: string | number;
  // public studentName: string;
  // public studentLocation: Location;
  // public studentGrade: string;
  // public studentGender: string;
  public studentInfo: Student;
  public teacherInfo: Teacher;
  public ps: string;
  public courses: Course[]; // 想要实习的科目
  public isArranged = false; // 是否被安排了


  constructor(requestId: string | number, studentInfo: Student, ps: string, courses: Course[], isArranged: boolean) {
    this.requestId = requestId;
    this.studentInfo = studentInfo;
    this.ps = ps;
    this.courses = courses;
    this.isArranged = isArranged;
  }
}
