import { StudentRequest } from '../student-request';

export interface ITeachingArrangementService {
  getStudentRequests(index, offset, arranged): Promise<StudentRequest[]>;
}
