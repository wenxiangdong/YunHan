import { User } from '../user';

export interface IUserService {
  signIn(username: string, password: string): Promise<User>;
  signUp(username: string, password: string): Promise<User>;
}
