import { Observable } from 'rxjs';
import { HttpResponse } from './http-response';

export interface IUserService {
  signIn(username: string, password: string): Observable<HttpResponse<any>>;
  signUp(username: string, password: string): Observable<HttpResponse<any>>;
}
