import { Course } from './enums/course.enum';
import { StudentType } from './enums/student-type.enum';
import { Contact } from './contact';
import { Location } from './location';

export class Student {
  public studentId: string | number;
  public name: string;
  public gender: string;
  public type: StudentType;
  public age: number;
  public location: Location;
  public school: string;           // 就读学校
  public grade: string;       // 年级
  public contact: Contact;         // 联系方式
  public introduction: string;  // 学生成绩等的描述


  constructor(studentId: string | number, name: string, gender: string, type: StudentType, age: number, location: Location, school: string, grade: string, contact: Contact, introduction: string) {
    this.studentId = studentId;
    this.name = name;
    this.gender = gender;
    this.type = type;
    this.age = age;
    this.location = location;
    this.school = school;
    this.grade = grade;
    this.contact = contact;
    this.introduction = introduction;
  }
}
