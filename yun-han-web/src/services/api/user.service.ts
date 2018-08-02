import { Injectable } from '@angular/core';
import { IUserService } from '../../types/i-user-service';
import { MockHttpService } from './mock/mock-http.service';
import { isTestMode } from './http-config';
import { HttpResponse } from '../../types/http-response';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor(
    private mockHttpService: MockHttpService,
    private httpService: BaseHttpService
  ) { }

  public signIn(username: string, password: string): Promise<HttpResponse<any>> {
    if (isTestMode) {
      return this.mockHttpService.go('');
      // return this.mockHttpService.error();
    }
    return this.httpService.post('/api/sign-in', {username, password});
  }

  public signUp(username: string, password: string): Promise<HttpResponse<any>> {
    if (isTestMode) {
      return this.mockHttpService.go('');
    }
    return this.httpService.post('/api/sign-up', {username, password});
  }

}
