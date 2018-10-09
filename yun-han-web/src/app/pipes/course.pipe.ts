import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../types/enums/course.enum';

@Pipe({
  name: 'course'
})
export class CoursePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Course[value];
  }

}
