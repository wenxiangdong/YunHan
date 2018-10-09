import { Injectable } from '@angular/core';
import { ITeachingArrangementService } from '../../types/interfaces/i-teaching-arrangement-service';
import { HttpResponse } from '../../types/http-response';
import { StudentRequest } from '../../types/student-request';
import { LoggerService } from '../utils/logger.service';
import { MockTeachingArrangementService } from './mock/mock-teaching-arrangement.service';
import { isTestMode } from '../../app/constants/http-config';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class TeachingArrangementService implements ITeachingArrangementService {

  constructor(
    private logger: LoggerService,
    private mock: MockTeachingArrangementService,
    private http: BaseHttpService
  ) { }

  getStudentRequests(index, offset, arranged: boolean = false): Promise<StudentRequest[]> {
    if (isTestMode) {
      return this.mock.getStudentRequests(index, offset, arranged);
    } else {
      return undefined;
    }
  }


}
