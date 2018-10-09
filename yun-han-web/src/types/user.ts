import { UserType } from './user-type';

export class User {
  constructor(
    public username: string,
    public type: UserType
  ) {}

}
