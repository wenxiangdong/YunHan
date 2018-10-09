import { Injectable } from '@angular/core';
import { IUserService } from '../../types/interfaces/i-user-service';
import { MockHttpService } from './mock/mock-http.service';
import { isTestMode } from '../../app/constants/http-config';
import { BaseHttpService } from './base-http.service';
import { User } from '../../types/user';
import { UserType } from '../../types/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor(
    private mockHttpService: MockHttpService,
    private httpService: BaseHttpService
  ) { }

  public signIn(username: string, password: string): Promise<User> {
    if (isTestMode) {
      return this.mockHttpService.go(new User('username', UserType.MANAGER));
      // return this.mockHttpService.error();
    }
    return this.httpService.post('/api/sign-in', {username, password});
  }

  public signUp(username: string, password: string): Promise<User> {
    if (isTestMode) {
      return this.mockHttpService.go(new User('username', UserType.MANAGER));
    }
    return this.httpService.post('/api/sign-up', {username, password});
  }

}
