import { Inject, Injectable } from '@angular/core';
import { IUserService } from '../../types/i-user-service';
import { Observable } from 'rxjs';
import { MockHttpService } from './mock/mock-http.service';
import { isTestMode } from './http-config';
import { HttpResponse } from '../../types/http-response';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor(
    private mockHttpService: MockHttpService
  ) { }

  public signIn(username: string, password: string): Observable<HttpResponse<any>> {
    if (isTestMode) {
      return this.mockHttpService.http('');
    }
    return undefined;
  }

  public signUp(username: string, password: string): Observable<HttpResponse<any>> {
    return undefined;
  }

}
