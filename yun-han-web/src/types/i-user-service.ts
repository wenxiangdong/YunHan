import { HttpResponse } from './http-response';

export interface IUserService {
  signIn(username: string, password: string): Promise<HttpResponse<any>>;
  signUp(username: string, password: string): Promise<HttpResponse<any>>;
}
