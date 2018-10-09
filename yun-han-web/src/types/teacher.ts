import { StudentType } from './enums/student-type.enum';
import { Course } from './enums/course.enum';
import { Location } from './location';
import { Contact } from './contact';

export class Teacher {
  public teacherId: string | number = 'id';
  public name = 'name';
  public gender = '男';
  public type: StudentType = StudentType.SCIENCE;
  public age = 0;
  public location: Location = new Location('name', 'fullName', 0, 0);
  public courses: Course[] = [Course.ENGLISH];    // 想要任教的科目
  public goodFeedbackRate = 0; // 好评率
  public school = 'school';           // 毕业学校
  public gradeClass = '高三2班';       // 年级班级
  public contact: Contact = new Contact();         // 联系方式

}
